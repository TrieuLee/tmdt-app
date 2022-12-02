const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthoriation,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const cartController = require("../controller/cartController");

router.post("/", verifyToken, cartController.create);
router.put("/:id", verifyTokenAndAuthoriation, cartController.update);
router.delete("/:id", verifyTokenAndAuthoriation, cartController.delete);
router.get("/", verifyTokenAndAdmin, cartController.get);
router.get("/find/:id", verifyTokenAndAuthoriation, cartController.getUserCart);
