const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndUpdate,
} = require("../middleware/verifyToken");
const orderController = require("../controller/orderController");

router.post("/:header", verifyToken, orderController.create);
router.put(
  "/:id/:header",
  verifyToken,
  verifyTokenAndUpdate,
  orderController.update
);
router.delete(
  "/:id/:header",
  verifyToken,
  verifyTokenAndUpdate,
  orderController.delete
);
router.get("/:header", verifyToken, verifyTokenAndUpdate, orderController.get);
router.get("/find/:id/:header", verifyToken, orderController.getUserOrder);

module.exports = router;
