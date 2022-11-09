const router = require("express").Router();

const userController = require("../controller/userController");

router.get("/", userController.get);

router.post("/", userController.register);
router.post("/", userController.login);

router.put("/:id", userController.update);

router.delete("/:id", userController.delete);
module.exports = router;
