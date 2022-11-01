const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
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
    describe: {
      type: String,
      default: "",
    },

    quantity: {
      type: Number,
      default: 0,
    },
    image: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      enum: ["air force", "jordan", "blazer", "hippie", "crater"],
      default: "air force",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
