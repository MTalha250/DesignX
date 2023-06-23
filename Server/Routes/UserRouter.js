var express = require("express");
const router = express.Router();
var userController = require("../Controllers/UserController");
const jwt = require("jsonwebtoken");

function validateUser(req, res, next) {
  jwt.verify(
    req.headers["x-access-token"],
    req.app.get("secretKey"),
    function (err) {
      if (err) {
        res.send({
          Status: "Authorization",
          message: "Session expired",
          error: true,
        });
      } else {
        next();
      }
    }
  );
}

router.post("/signup", userController.create);
router.post("/login", userController.authenticate);
router.get("/users", userController.getAll);
router.get("/currentUser/:id", validateUser, userController.getSingle);
router.delete("/delete/:id", userController.delete);
router.put("/update/:id", userController.update);

module.exports = router;
