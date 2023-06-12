const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var showcaseSchema = new Schema({
  imgs: Array,
  name: String,
});

module.exports = mongoose.model("showcaseItem", showcaseSchema);
