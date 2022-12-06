const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthoriation,
} = require("../middleware/verifyToken");
const userController = require("../controller/userController");

router.put(
  "/:id",
  verifyToken,
  verifyTokenAndAuthoriation,
  userController.update
);
router.delete(
  "/:id",
  verifyToken,
  verifyTokenAndAuthoriation,
  userController.delete
);
module.exports = router;
