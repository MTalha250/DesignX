require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
require("./Database/database");
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/Uploads", express.static("Uploads"));
app.set("secretKey", process.env.SECRET_KEY);
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

app.get("/", (req, res) => {
  res.send("Server is Running");
});

const showcaseRoute = require("./Routes/ShowcaseRouter");
app.use("/showcase", showcaseRoute);

const homeRoute = require("./Routes/HomeRouter");
app.use("/home", homeRoute);

const userRoute = require("./Routes/UserRouter");
app.use("/user", userRoute);

const productRoute = require("./Routes/ProductRouter");
app.use("/product", productRoute);

const quoteRoute = require("./Routes/QuoteRouter");
app.use("/quotes", quoteRoute);

app.listen(8080, () => {
  console.log("your server is running on port# 8080");
});
