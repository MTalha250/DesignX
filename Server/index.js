const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
require("./Database/database");
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/Uploads", express.static("Uploads"));
app.set("secretKey", "Mein Nai Bataon Ga");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("Server is Running");
});

const userRoute = require("./Routes/UserRouter");
app.use("/user", userRoute);

const productRoute = require("./Routes/ProductRouter");
app.use("/product", productRoute);

app.listen(8080, () => {
  console.log("your server is running on port# 8080");
});
