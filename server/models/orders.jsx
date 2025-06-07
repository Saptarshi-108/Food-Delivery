const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  order_id: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  userID: {
    type: String,
    required: true,
  },
  restaurant_id: {
    type: String,
    required: true,
  },
  delivery_id: {
    type: String,
    required: true,
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

orderSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("Order", orderSchema, "orders");
