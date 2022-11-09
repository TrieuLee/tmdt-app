const mongoose = require("mongoose");
const { Sequelize, DataTypes } = require("sequelize");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      min: 6,
    },
    profilePicture: {
      type: String,
      default: "",
    },

    city: {
      type: String,
      max: 50,
    },
    from: {
      type: String,
      max: 50,
    },
    likes: {
      type: Array,
      default: [],
    },
    reward: {
      type: Number,
      default: 0,
    },
    role: {
      type: Number,
      enum: [1, 2, 3],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
