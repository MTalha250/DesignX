const productModel = require("../Models/ProductModel");

module.exports = {
  create: function (req, res) {
    productModel
      .create({
        imgs: req.files.map((r) => r.path),
        ...req.body,
      })
      .then(() => {
        res.send({ message: "Item inserted successfully" });
      })
      .catch((err) => {
        res.send({ message: "Some error occurred" + err });
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
        res.send({ message: "Product deleted" });
      })
      .catch((err) => {
        res.send("Something went wrong!!!!" + err);
      });
  },
  update: function (req, res) {
    if (req.files.length > 0) {
      productModel
        .findByIdAndUpdate(req.params.id, {
          imgs: req.files.map((r) => r.path),
          ...req.body,
        })
        .then(() => {
          res.send({ message: "Product updated" });
        })
        .catch((err) => {
          res.send({ message: "Something went wrong!!!!" + err });
        });
    } else {
      productModel
        .findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
          res.send({ message: "Product updated" });
        })
        .catch((err) => {
          res.send({ message: "Something went wrong!!!!" + err });
        });
    }
  },
  reviews: function (req, res) {
    productModel
      .findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.send({ message: "Review submitted" });
      })
      .catch((err) => {
        res.send({ message: "Something went wrong!!!!" + err });
      });
  },
};
