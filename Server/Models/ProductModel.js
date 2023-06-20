const mongoose = require("mongoose");

var Schema = mongoose.Schema;
var productSchema = new Schema({
  imgs: Array,
  name: String,
  size: String,
  description: String,
  design: String,
  versatility: String,
  functionality: String,
  features: String,
  dimensions: String,
  category: String,
  sub_category: String,
  type: String,
  created_at: Date,
  reviews: [
    {
      name: String,
      email: String,
      rating: Number,
      title: String,
      review: String,
      created_at: Date,
    },
  ],
});

module.exports = mongoose.model("product", productSchema);
