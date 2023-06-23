var express = require("express");
const router = express.Router();
var userController = require("../Controllers/UserController");

router.post("/signup", userController.create);
router.post("/login", userController.authenticate);
router.get("/users", userController.getAll);
router.get("/currentUser/:id", userController.getSingle);
router.delete("/delete/:id", userController.delete);
router.put("/update/:id", userController.update);

module.exports = router;
