const mongoose = require("mongoose");

var Schema = mongoose.Schema;
var productSchema = new Schema({
  imgs: Array,
  name: String,
  size: String,
  description: String,
  category: String,
  sub_category: String,
  type: String,
  created_at: Date,
  reviews: {
    type: Array,
    items: {
      rating: Number,
      name: String,
      review: String,
    },
  },
});

module.exports = mongoose.model("product", productSchema);
