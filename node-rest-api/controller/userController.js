const { User } = require("../models");
const bcrypt = require("bcryptjs");

class UserCURD {
  async get(req, res) {
    try {
      const user = await User.find();
      res.json(user);
    } catch (err) {
      res.status(500).send();
    }
  }
  async register(req, res) {
    try {
      // generate the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      // create new user
      const newUser = await new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
        profilePicture: req.body.profilePicture,
        city: req.body.city,
        from: req.body.from,
        role: req.body.role,
      });
      // save user and respond
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  }
  async login(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(404).json("Tài khoản hoặc mật khẩu sai!");
      }

      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword)
        return res.status(400).json("Tài khoản hoặc mật khẩu sai!");
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  async update(req, res) {
    if (req.body.userId === req.params.id) {
      if (req.body.password) {
        try {
          const salt = await bcrypt.genSalt(10);
          req.body.password = await bcrypt.hash(req.body.password, salt);
        } catch (err) {
          return res.status(500).json(err);
        }
      }
      try {
        await User.findByIdAndUpdate(req.params.id, {
          $set: req.body,
        });
        res.status(200).json("Bạn đã cập nhập tài khoản thành công");
      } catch (err) {
        return res.status(500).json(500);
      }
    } else {
      return res.status(403).json("bạn chỉ có thể cập nhập tài khoản của bạn");
    }
  }
  async delete(req, res) {
    if (req.body.userId === req.params.id) {
      try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json("Bạn đã xóa tài khoản thành công");
      } catch (err) {
        return res.status(500).json(500);
      }
    } else {
      return res.status(403).json("bạn chỉ có thể xóa tài khoản của bạn");
    }
  }

  async logout(req, res) {
    try {
      res.clearCookie("token").send();
    } catch (err) {
      return res.json(err);
    }
  }
}

module.exports = new UserCURD();
