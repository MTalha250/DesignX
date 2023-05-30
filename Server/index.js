const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/Uploads", express.static("Uploads"));
app.set("secretKey", "Mein Nai Bataon Ga");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("Server is Running");
});
app.listen(8080, () => {
  console.log("your server is running on port# 8080");
});
