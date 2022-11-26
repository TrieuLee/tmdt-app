const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthoriation,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const userController = require("../controller/userController");

router.put("/:id", verifyTokenAndAuthoriation, userController.update);
router.delete("/:id", verifyTokenAndAuthoriation, userController.delete);
module.exports = router;
