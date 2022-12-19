const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndUpdate,
} = require("../middleware/verifyToken");
const productController = require("../controller/productController");

router.post(
  "/:header",
  verifyToken,
  verifyTokenAndUpdate,
  productController.create
);
router.put(
  "/:id/:header",
  verifyToken,
  verifyTokenAndUpdate,
  productController.update
);
router.delete(
  "/:id/:header",
  verifyToken,
  verifyTokenAndUpdate,
  productController.delete
);
router.get("/", productController.get);
router.get("/find/:id", productController.getProduct);
// router.get("/", productController.get);
// router.post("/create", verifyTokenAndAdmin, productController.create);
module.exports = router;
