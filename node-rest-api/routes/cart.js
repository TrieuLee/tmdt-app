const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndUpdate,
} = require("../middleware/verifyToken");
const cartController = require("../controller/cartController");

router.post("/", verifyToken, cartController.create);
router.put("/:id", verifyToken, verifyTokenAndUpdate, cartController.update);
router.delete("/:id", verifyToken, verifyTokenAndUpdate, cartController.delete);
router.get("/", verifyToken, verifyTokenAndUpdate, cartController.get);
router.get("/find/:id", verifyToken, cartController.getUserCart);

module.exports = router;
