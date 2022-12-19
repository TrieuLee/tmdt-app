const { User, Order } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const createError = require("../utils/error");
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
        role: 3,
      });
      // save user and respond
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  }

  async registerManager(req, res) {
    try {
      // generate the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      if (!req.params.id) return res.status(500).json(err);
      const admin = await User.findById(req.params.id);
      if (admin.role === 1) {
        const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          password: hashedPassword,
          phone: req.body.phone,
          address: req.body.address,
          role: 2,
        });
        // save user and respond
        const user = await newUser.save();
        res.status(200).json(user);
      } else res.status(500).json(err);
      // create new user
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  }

  async login(req, res, next) {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return next(createError(404, "Không tìm thấy người dùng!"));
      }

      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        return next(createError(400, "Tài khoản hoặc mật khẩu sai!"));
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
      next(err);
    }
  }
  async loginManager(req, res, next) {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return next(createError(404, "Không tìm thấy người dùng!"));
      }

      if (user.role === 3) {
        return next(createError(404, "Trang web chỉ dành cho Nhân viên"));
      }

      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        return next(createError(400, "Tài khoản hoặc mật khẩu sai!"));
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
      next(err);
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

  async forgotPassword(req, res, next) {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return next(createError(404, "Không tìm thấy người dùng!"));
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      user.password = hashedPassword;
      const savedPassword = await user.save();
      const accessToken = jwt.sign(
        {
          id: savedPassword._id,
        },
        process.env.JWT_SECRET,
        { expiresIn: "3d" }
      );
      res.status(200).json({ user, accessToken });
    } catch (err) {
      next(err);
    }
  }
}
module.exports = new AuthCRUD();
