const OrderItem = require("../models/order_items");

exports.getOrderItems = async (req, res) => {
  try {
    const { order_id } = req.query;
    if (!order_id) {
      return res.status(400).json({ error: "order_id is required" });
    }

    const items = await OrderItem.find({ order_id }).populate("menuitem_id");
    res.status(200).json(items);
  } catch (error) {
    console.error("Error fetching order items:", error);
    res.status(500).json({ error: "Server error" });
  }
};
