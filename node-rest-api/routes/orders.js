const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthoriation,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const orderController = require("../controller/orderController");

router.post("/", verifyToken, orderController.create);
router.put("/:id",verifyTokenAndAdmin, orderController.update);
router.delete("/:id",verifyTokenAndAdmin, orderController.delete);
router.get("/",verifyTokenAndAdmin, orderController.get);
router.get("/find/:id",verifyTokenAndAuthoriation,orderController.getUserOrder)

module.exports = router;
