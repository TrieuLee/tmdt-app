const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthoriation,
  verifyTokenAndUpdate,
} = require("../middleware/verifyToken");
const orderController = require("../controller/orderController");

router.post("/", orderController.create);
router.put("/:id", verifyToken, verifyTokenAndUpdate, orderController.update);
router.delete(
  "/:id",
  verifyToken,
  verifyTokenAndUpdate,
  orderController.delete
);
router.get("/", orderController.get);
router.get("/find/:id", orderController.getUserOrder);

module.exports = router;
