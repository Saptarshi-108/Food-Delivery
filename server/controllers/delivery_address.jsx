const DeliveryAddress = require("../models/delivery_address");

exports.saveAddress = async (req, res) => {
  try {
    const { delivery_id, userID, address, city, state, instructions } =
      req.body;
    if (!delivery_id || !userID || !address || !city || !state) {
      return res.status(400).json({ error: "Required fields missing" });
    }

    const newAddress = new DeliveryAddress({
      delivery_id,
      userID,
      address,
      city,
      state,
      instructions,
    });
    await newAddress.save();
    res.status(201).json(newAddress);
  } catch (error) {
    console.error("Error saving address:", error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getAddresses = async (req, res) => {
  try {
    const { userID } = req.query;
    if (!userID) {
      return res.status(400).json({ error: "userID is required" });
    }

    const addresses = await DeliveryAddress.find({ userID }).sort({
      createdAt: -1,
    });
    res.status(200).json(addresses);
  } catch (error) {
    console.error("Error fetching addresses:", error);
    res.status(500).json({ error: "Server error" });
  }
};
