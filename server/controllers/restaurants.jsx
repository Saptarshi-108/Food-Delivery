const Restaurant = require("../models/restaurants");

exports.createRestaurant = async (req, res) => {
  try {
    const { restaurant_id, name, email, phone } = req.body;
    if (!restaurant_id || !name || !email || !phone) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const restaurant = new Restaurant({ restaurant_id, name, email, phone });
    await restaurant.save();
    res.status(201).json(restaurant);
  } catch (error) {
    console.error("Error creating restaurant:", error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find().sort({ name: 1 });
    res.status(200).json(restaurants);
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    res.status(500).json({ error: "Server error" });
  }
};
