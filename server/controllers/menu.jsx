const Menu = require("../models/menu");
const MenuItem = require("../models/menu_items");

exports.addMenuItemToRestaurant = async (req, res) => {
  try {
    const { menu_id, restaurant_id, menu_item_id, isSignature, isActive } =
      req.body;
    if (!menu_id || !restaurant_id || !menu_item_id) {
      return res.status(400).json({ error: "Required fields missing" });
    }

    const menu = new Menu({
      menu_id,
      restaurant_id,
      menu_item_id,
      isSignature,
      isActive,
    });
    await menu.save();
    res.status(201).json(menu);
  } catch (error) {
    console.error("Error adding menu item to restaurant:", error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getRestaurantMenu = async (req, res) => {
  try {
    const { restaurant_id } = req.query;
    if (!restaurant_id) {
      return res.status(400).json({ error: "restaurant_id is required" });
    }

    const menu = await Menu.find({ restaurant_id, isActive: true })
      .populate("menu_item_id")
      .sort({ "menu_item_id.name": 1 });

    const formattedMenu = menu.map((item) => ({
      menu_id: item.menu_id,
      menu_item_id: item.menu_item_id.menu_items_id,
      name: item.menu_item_id.name,
      description: item.menu_item_id.description,
      price: item.menu_item_id.price,
      isAvailable: item.menu_item_id.isAvailable,
      imageUrl: item.menu_item_id.imageUrl,
      isSignature: item.isSignature,
    }));

    res.status(200).json(formattedMenu);
  } catch (error) {
    console.error("Error fetching restaurant menu:", error);
    res.status(500).json({ error: "Server error" });
  }
};
