const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      min: 3,
      max: 60,
    },
    price: {
      type: Number,
      default: 0,
    },
    size: {
      type: Array,
    },

    brand: {
      type: Array,
    },
    state: {
      type: Boolean,
      default: false,
    },
    img: {
      type: String,
      default: "",
    },
    quantity: {
      type: Number,
      default: "0",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
