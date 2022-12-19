const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthoriation,
} = require("../middleware/verifyToken");
const userController = require("../controller/userController");

router.put(
  "/:id/:header",
  verifyToken,
  verifyTokenAndAuthoriation,
  userController.update
);
router.put(
  "/reward/:id/:header",
  verifyToken,
  verifyTokenAndAuthoriation,
  userController.updateReward
);
router.delete(
  "/:id/:header",
  verifyToken,
  verifyTokenAndAuthoriation,
  userController.delete
);
module.exports = router;
