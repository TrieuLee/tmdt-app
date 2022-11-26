const mongoose = require("mongoose");
const { Sequelize, DataTypes } = require("sequelize");

const OrderSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
    },
    addressDeli: {
      type: String,
      require: true,
    },
    total: {
      type: Number,
      default: 0,
    },
    amount: {
      type: Number,
      required: true,
    },
    payment: {
      type: String,
      enum: ["Thanh toán bằng tiền mặt", "Thanh toán bằng Stripe"],
      default: "Thanh toán bằng tiền mặt",
    },

    orderDate: {
      type: String,
      require: true,
    },
    orderPayDate: {
      type: String,
      require: true,
    },
    orderStatus: {
      type: Number,
      // 0: hủy đơn, 1:đặt hàng thành công, 2:đã duyệt đơn, 3:đang giao, 4: giao thành công
      enum: [0, 1, 2, 3, 4],
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
