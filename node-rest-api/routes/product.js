const router = require("express").Router();
const Prodcut = require("../models/Product");
const bcrypt = require("bcrypt");

// get user
router.get("/", async (req, res) => {
  try {
    const product = await Prodcut.find();
    res.json(product);
  } catch (err) {
    res.status(500).send(err);
  }
});
// create a user
router.post("/", async (req, res) => {
  const newUser = new Prodcut(req.body);
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
  if (req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    try {
      await Prodcut.findByIdAndUpdate(req.params.id, {
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
      const user = await Prodcut.findByIdAndDelete(req.params.id);
      res.status(200).json("Bạn đã xóa tài khoản thành công");
    } catch (err) {
      return res.status(500).json(500);
    }
  } else {
    return res.status(403).json("bạn chỉ có thể xóa tài khoản của bạn");
  }
});
// // get a user
// router.get("/", async (req, res) => {
//   const userId = req.query.userId;
//   const username = req.query.username;
//   try {
//     const user = userId
//       ? await User.findById(userId)
//       : await User.findOne({ username: username });
//     const { password, updatedAt, ...others } = user._doc;
//     res.status(200).json(others);
//   } catch (err) {
//     return res.status(500).json(err);
//   }
// });
// follow a user
module.exports = router;
