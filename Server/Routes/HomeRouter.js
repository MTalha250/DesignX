var express = require("express");
const router = express.Router();
var homeController = require("../Controllers/HomeController");
const multer = require("multer");
const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post("/add", upload.single("img"), homeController.create);
router.get("/get", homeController.getAll);

module.exports = router;
