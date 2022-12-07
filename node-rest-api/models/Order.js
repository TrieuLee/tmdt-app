const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: { type: String },
        name: { type: String },
        price: { type: Number },
        quantity: { type: Number, default: 1 },
      },
    ],
    subtotal: { type: Number, required: true },
    total: { type: Number, required: true },
    shipping: { type: Object, required: true },
    delivery_status: { type: String, default: "đã nhận đơn hàng" },
    payment_status: { type: String, required: true },
    payment_method: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
