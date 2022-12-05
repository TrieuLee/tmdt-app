const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
class AuthCRUD {
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
        phone: req.body.phone,
        address: req.body.address,
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
      if (!validPassword) {
        return res.status(400).json("Tài khoản hoặc mật khẩu sai!");
      }
      const accessToken = jwt.sign(
        {
          id: user._id,
          role: user.role,
        },
        process.env.JWT_SECRET,
        { expiresIn: "3d" }
      );

      res.status(200).json({ user, accessToken });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getUser(req, res) {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
module.exports = new AuthCRUD();
