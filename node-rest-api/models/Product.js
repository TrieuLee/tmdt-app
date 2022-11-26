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
      enum: ["Air Force", "Jordan", "Blazer", "Hippie", "Crater"],
      default: "Air Force",
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
