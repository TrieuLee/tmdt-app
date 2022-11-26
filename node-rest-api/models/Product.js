const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      min: 3,
      max: 60,
      unique: true,
    },
    price: {
      type: Number,
      default: 0,
    },
    size: {
      type: Number,
      enum: [38, 39, 40, 41, 42, 43],
      default: 38,
    },

    type: {
      type: String,
      enum: ["Air Force", "Jordan", "Blazer", "Hippie", "Crater"],
      default: "Air Force",
    },
    state: {
      type: Boolean,
      default: false,
    },
    image: {
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
