const express = require("express");
const router = express.Router();
const quoteController = require("../Controllers/QuoteController");
router.post("/add", quoteController.create);
router.get("/get", quoteController.getAll);
router.delete("/delete/:id", quoteController.delete);

module.exports = router;
