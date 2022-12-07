const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndUpdate,
} = require("../middleware/verifyToken");
const orderController = require("../controller/orderController");

router.post("/", orderController.create);
router.put("/:id", verifyToken, verifyTokenAndUpdate, orderController.update);
router.delete(
  "/:id/:header",
  verifyToken,
  verifyTokenAndUpdate,
  orderController.delete
);
router.get("/", orderController.get);
router.get("/find/:id", orderController.getUserOrder);

module.exports = router;
