const productModel = require("../Models/ProductModel");

module.exports = {
  create: function (req, res) {
    productModel
      .create({
        imgs: req.files.map((r) => r.path),
        ...req.body,
      })
      .then(() => {
        res.send({ message: "Item Inserted Successfully" });
      })
      .catch((err) => {
        res.send({ message: "Some Error Occurred" + err });
      });
  },
  getAll: function (req, res) {
    productModel.find().then((results) => {
      res.send(results);
    });
  },
  delete: function (req, res) {
    productModel
      .findByIdAndDelete(req.params.id)
      .then(() => {
        res.send({ message: "Product Deleted" });
      })
      .catch((err) => {
        res.send("Something went wrong!!!!" + err);
      });
  },
  update: function (req, res) {
    productModel
      .findByIdAndUpdate(req.params.id, {
        imgs: req.files.map((r) => r.path),
        ...req.body,
      })
      .then(() => {
        res.send({ message: "Product Updated" });
      })
      .catch((err) => {
        res.send({ message: "Something went wrong!!!!" + err });
      });
  },
};
