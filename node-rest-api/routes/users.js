const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// get user
router.get("/", async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (err) {
    res.status(500).send(err);
  }
});
// create a user
router.post("/", async (req, res) => {
  const newUser = new User(req.body);
  if (req.body.password) {
    try {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
  const existingUser = await User.findOne({ email: req.body.email });
  if (existingUser) {
    return res.status(400).json({
      errorMessage: "Email đã được sử dụng. Hãy dùng email khác!",
    });
  }
  try {
    const saveUser = await newUser.save();
    res.status(200).json(saveUser);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});
// update a user
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
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
});
// delete a user
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Bạn đã xóa tài khoản thành công");
    } catch (err) {
      return res.status(500).json(500);
    }
  } else {
    return res.status(403).json("bạn chỉ có thể xóa tài khoản của bạn");
  }
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).json({
      errorMessage: "Sai tài khoản hoặc mật khẩu. Vui lòng nhập lại.",
    });
  }
  console.log(user);
  //const correctUser = await bcrypt.compare(req.body.password, user.password);

  if (req.body.password !== user.password) {
    return res.status(400).json({
      errorMessage: "Sai tài khoản hoặc mật khẩu. Vui lòng nhập lại.",
    });
  }

  try {
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
