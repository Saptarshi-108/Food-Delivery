const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  payment_id: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  order_id: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
    min: 0,
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

paymentSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("Payment", paymentSchema, "payments");
