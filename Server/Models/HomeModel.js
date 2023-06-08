const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var homeSchema = new Schema({
  img: String,
  name: String,
  link: String,
  category: String,
});

module.exports = mongoose.model("homeImg", homeSchema);
