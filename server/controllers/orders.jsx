const Order = require("../models/order");
const OrderItem = require("../models/order_items");
const Menu = require("../models/menu");

exports.createOrder = async (req, res) => {
  try {
    const { order_id, userID, restaurant_id, delivery_id, items } = req.body;
    if (!order_id || !userID || !restaurant_id || !delivery_id || !items) {
      return res.status(400).json({ error: "Required fields missing" });
    }

    const order = new Order({ order_id, userID, restaurant_id, delivery_id });
    await order.save();

    const orderItems = await Promise.all(
      items.map(async (item, index) => {
        const { menu_id, quantity, notes } = item;
        const menuItem = await Menu.findOne({ menu_id, restaurant_id });
        if (!menuItem) {
          throw new Error(
            `Menu item ${menu_id} not found for restaurant ${restaurant_id}`
          );
        }

        const orderItem = new OrderItem({
          order_items_id: `${order_id}_${index}`,
          order_id,
          menuitem_id: menuItem.menu_item_id,
          quantity: quantity || 1,
          notes,
          price: (
            await MenuItem.findOne({ menu_items_id: menuItem.menu_item_id })
          ).price,
        });
        await orderItem.save();
        return orderItem;
      })
    );

    res.status(201).json({ order, orderItems });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const { userID } = req.query;
    if (!userID) {
      return res.status(400).json({ error: "userID is required" });
    }

    const orders = await Order.find({ userID })
      .populate("delivery_id")
      .sort({ createdAt: -1 });

    const orderDetails = await Promise.all(
      orders.map(async (order) => {
        const items = await OrderItem.find({
          order_id: order.order_id,
        }).populate("menuitem_id");
        return { order, items };
      })
    );

    res.status(200).json(orderDetails);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ error: "Server error" });
  }
};
