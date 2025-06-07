const User = require("../models/users");

exports.createUser = async (req, res) => {
  try {
    const { firebaseUid, id, name, email, phone } = req.body;
    if (!firebaseUid || !id || !name || !email || !phone) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const user = new User({ firebaseUid, id, name, email, phone });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getUser = async (req, res) => {
  try {
    const { firebaseUid } = req.query;
    if (!firebaseUid) {
      return res.status(400).json({ error: "firebaseUid is required" });
    }

    const user = await User.findOne({ firebaseUid });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Server error" });
  }
};
