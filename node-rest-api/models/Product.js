const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
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

    category: {
      type: String,
      enum: ["airforce", "jordan", "blazer", "hippie", "crater"],
      default: "airforce",
    },
    state: {
      type: Boolean,
      default: false,
    },
    images: {
      type: String,
      default: "",
    },
    describe: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
