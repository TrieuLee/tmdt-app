const { User, Order } = require("../models");
const bcrypt = require("bcryptjs");

class UserCURD {
  async update(req, res) {
    // if (req.user.id === req.params.id) {

    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    try {
      await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json("Bạn đã cập nhập tài khoản thành công");
    } catch (err) {
      return res.status(500).json(500);
    }
    // } else {
    //   return res.status(403).json("bạn chỉ có thể cập nhập tài khoản của bạn");
    // }
  }
  async updateReward(req, res) {
    try {
      const successOrder = await Order.find({ userId: req.params.id });
      if (!successOrder) res.status(500).json("Invalid update Reward");
      else {
        const x = successOrder.filter(
          (i) => i.delivery_status === "Hoàn thành"
        );
        const updateUser = await User.findById(req.params.id);
        updateUser.reward = x.length;
        await updateUser.save();
        res.status(200).json(x);
      }
    } catch (err) {
      res.status(500).json("Invalid update Reward");
    }
  }
  async delete(req, res) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Bạn đã xóa tài khoản thành công");
    } catch (err) {
      return res.status(500).json(500);
    }
  }
}

module.exports = new UserCURD();
