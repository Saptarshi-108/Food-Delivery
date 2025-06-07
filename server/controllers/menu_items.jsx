const MenuItem = require("../models/menu_items");

exports.createMenuItem = async (req, res) => {
  try {
    const { menu_items_id, name, description, price, isAvailable, imageUrl } =
      req.body;
    if (!menu_items_id || !name || !price) {
      return res.status(400).json({ error: "Required fields missing" });
    }

    const menuItem = new MenuItem({
      menu_items_id,
      name,
      description,
      price,
      isAvailable,
      imageUrl,
    });
    await menuItem.save();
    res.status(201).json(menuItem);
  } catch (error) {
    console.error("Error creating menu item:", error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getMenuItems = async (req, res) => {
  try {
    const menuItems = await MenuItem.find({ isAvailable: true }).sort({
      name: 1,
    });
    res.status(200).json(menuItems);
  } catch (error) {
    console.error("Error fetching menu items:", error);
    res.status(500).json({ error: "Server error" });
  }
};
