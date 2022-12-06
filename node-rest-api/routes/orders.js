const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthoriation,
  verifyTokenAndUpdate,
} = require("../middleware/verifyToken");
const orderController = require("../controller/orderController");

router.post("/", verifyToken, orderController.create);
router.put("/:id", verifyToken, verifyTokenAndUpdate, orderController.update);
router.delete(
  "/:id",
  verifyToken,
  verifyTokenAndUpdate,
  orderController.delete
);
router.get("/", verifyToken, verifyTokenAndUpdate, orderController.get);
router.get("/find/:id", verifyToken, orderController.getUserOrder);

module.exports = router;
