const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  menu_id: {
    type: String,
    unique: true,
    required: true,
    index: true,
  },
  restaurant_id: {
    type: String,
    required: true,
  },
  menu_item_id: {
    type: String,
    required: true,
  },
  isSignature: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: true,
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

menuSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

menuSchema.index({ restaurant_id: 1, menu_item_id: 1 }, { unique: true });

module.exports = mongoose.model("Menu", menuSchema, "menu");
