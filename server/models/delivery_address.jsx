const mongoose = require("mongoose");

const deliveryAddressSchema = new mongoose.Schema({
  delivery_id: {
    type: String,
    unique: true,
    index: true,
    required: true,
  },
  userID: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    required: true,
    trim: true,
  },
  instructions: {
    type: String,
    default: "No Instructions",
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

deliveryAddressSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model(
  "DeliveryAddress",
  deliveryAddressSchema,
  "delivery_address"
);
