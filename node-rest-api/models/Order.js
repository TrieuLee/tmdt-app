const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    customerID: {
      type: String,
      require: true,
    },
    productID: {
      type: Array,
      require: true,
    },
    addressDeli: {
      type: String,
      require: true,
    },
    pay: {
      type: Number,
      default: 0,
    },
    payment: {
      type: Number,
      default: 0,
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
      type: Array,
      enum: [0, 1, 2, 3, 4, 5, 6],
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
