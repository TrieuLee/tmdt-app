const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndUpdate,
} = require("../middleware/verifyToken");
const productController = require("../controller/productController");

router.post("/", verifyToken, verifyTokenAndUpdate, productController.create);
router.put("/:id", verifyToken, verifyTokenAndUpdate, productController.update);
router.delete(
  "/:id",
  verifyToken,
  verifyTokenAndUpdate,
  productController.delete
);
router.get("/", verifyToken, verifyTokenAndUpdate, productController.get);
router.get(
  "/find/:id",
  verifyToken,
  verifyTokenAndUpdate,
  productController.getProduct
);
// router.get("/", productController.get);
// router.post("/create", verifyTokenAndAdmin, productController.create);
module.exports = router;
