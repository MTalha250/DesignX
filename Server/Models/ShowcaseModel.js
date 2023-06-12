const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var showcaseSchema = new Schema({
  img: String,
  name: String,
  imgs: Array,
});

module.exports = mongoose.model("showcaseItem", showcaseSchema);
