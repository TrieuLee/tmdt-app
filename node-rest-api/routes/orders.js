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
router.get("/:header", orderController.get);
router.get("/find/:id/:header", orderController.getUserOrder);

module.exports = router;
