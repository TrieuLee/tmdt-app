const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthoriation,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const productController = require("../controller/productController");

router.post("/", verifyTokenAndAdmin, productController.create);
router.put("/:id", verifyTokenAndAdmin, productController.update);
router.delete("/:id", verifyTokenAndAdmin, productController.delete);
router.get("/", productController.get);
router.get("/find/:id", productController.getProduct);
// router.get("/", productController.get);
// router.post("/create", verifyTokenAndAdmin, productController.create);
module.exports = router;
