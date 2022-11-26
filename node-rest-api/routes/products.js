const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthoriation,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const productController = require("../controller/productController");

router.get("/", productController.get);
router.post("/create", verifyTokenAndAdmin, productController.create);
module.exports = router;
