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
    subtotal: { type: Number, required: true }, // phí ship
    total: { type: Number, required: true },
    shipping: { type: Object, required: true },
    delivery_status: { type: String, default: "Đã nhận đơn hàng" }, // đang giao// đã hoàn thành// hủy đơn hàng
    payment_status: { type: String, required: true },
    payment_method: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
