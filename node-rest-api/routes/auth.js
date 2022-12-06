const router = require("express").Router();
const authController = require("../controller/authController");

router.get("/", authController.get);
router.post("/register", authController.register);
router.post("/register/:id", authController.registerManager);
router.post("/login/manager", authController.loginManager);
router.post("/login", authController.login);
router.get("/find/:id", authController.getUser);

// router.post("/logout", authController.logout);
// router.put("/:id", authController.update);
// router.delete("/:id", authController.delete);

module.exports = router;
