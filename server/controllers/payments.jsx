const Payment = require("../models/payments");

exports.createPayment = async (req, res) => {
  try {
    const { payment_id, order_id, amount } = req.body;
    if (!payment_id || !order_id || !amount) {
      return res.status(400).json({ error: "Required fields missing" });
    }

    const payment = new Payment({ payment_id, order_id, amount });
    await payment.save();
    res.status(201).json(payment);
  } catch (error) {
    console.error("Error creating payment:", error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getPayments = async (req, res) => {
  try {
    const { order_id } = req.query;
    if (!order_id) {
      return res.status(400).json({ error: "order_id is required" });
    }

    const payments = await Payment.find({ order_id }).sort({ createdAt: -1 });
    res.status(200).json(payments);
  } catch (error) {
    console.error("Error fetching payments:", error);
    res.status(500).json({ error: "Server error" });
  }
};
