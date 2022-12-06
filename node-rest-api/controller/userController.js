const { User } = require("../models");
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
  async delete(req, res) {
    if (req.user.id === req.params.id || req.user.role ===1) {
      try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("Bạn đã xóa tài khoản thành công");
      } catch (err) {
        return res.status(500).json(500);
      }
    } else {
      return res.status(403).json("bạn chỉ có thể xóa tài khoản của bạn");
    }
  }

}

module.exports = new UserCURD();
