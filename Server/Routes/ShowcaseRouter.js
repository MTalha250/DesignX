const express = require("express");
const router = express.Router();
const showcaseController = require("../Controllers/ShowcaseController");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "Uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post(
  "/add",
  upload.single("img") || upload.array("imgs", 10),
  showcaseController.create
);
router.get("/get", showcaseController.getAll);
router.delete("/delete/:id", showcaseController.delete);

module.exports = router;
