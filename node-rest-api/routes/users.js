const router = require("express").Router();

const userController = require("../controller/userController");

router.get("/", userController.get);

router.post("/register", userController.register);
router.post("/login", userController.login);

router.put("/:id", userController.update);

router.delete("/:id", userController.delete);
module.exports = router;
