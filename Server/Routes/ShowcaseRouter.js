const express = require("express");
const router = express.Router();
const showcaseController = require("../Controllers/ShowcaseController");
router.post("/add", showcaseController.create);
router.get("/get", showcaseController.getAll);
router.delete("/delete/:id", showcaseController.delete);

module.exports = router;
