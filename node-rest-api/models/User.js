const mongoose = require("mongoose");

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
    phone: {
      type: String,
      require: true,
    },

    address: {
      type: String,
      max: 50,
    },

    reward: {
      type: Number,
      default: 0,
    },
    role: {
      type: Number,
      default: 3,
      enum: [1, 2, 3],
    },
    reward: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
