const productModel = require("../Models/ProductModel");
const cloudinary = require("cloudinary");

module.exports = {
  create: async function (req, res) {
    const imgs = [];
    const files = req.files;
    for (let file of files) {
      const result = await cloudinary.v2.uploader.upload(file.path);
      imgs.push(result.secure_url);
    }
    productModel
      .create({
        imgs: imgs,
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
  update: async function (req, res) {
    if (req.files.length > 0) {
      const imgs = [];
      const files = req.files;
      for (let file of files) {
        const result = await cloudinary.v2.uploader.upload(file.path);
        imgs.push(result.secure_url);
      }
      productModel
        .findByIdAndUpdate(req.params.id, {
          imgs: imgs,
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
