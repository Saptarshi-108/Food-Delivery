const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
  order_items_id: {
    type: String,
    unique: true,
    required: true,
    index: true,
  },
  order_id: {
    type: String,
    required: true,
  },
  menuitem_id: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 0,
    min: 0,
  },
  notes: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

orderItemSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("OrderItem", orderItemSchema, "order_items");
