const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var quoteSchema = new Schema({
  name: String,
  email: String,
  no: Number,
  city: String,
  product: String,
  productId: String,
});

module.exports = mongoose.model("quote", quoteSchema);
