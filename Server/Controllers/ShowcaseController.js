const showcaseModel = require("../Models/ShowcaseModel");
const cloudinary = require("cloudinary");
module.exports = {
  create: async function (req, res) {
    const result = await cloudinary.v2.uploader.upload(req.file.path, {
      folder: "DesignX",
      use_filename: true,
    });
    showcaseModel
      .create({
        img: result.secure_url,
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
    showcaseModel.find().then((results) => {
      res.send(results);
    });
  },
  delete: function (req, res) {
    showcaseModel
      .findByIdAndDelete(req.params.id)
      .then(() => {
        res.send({ message: "Quote deleted" });
      })
      .catch((err) => {
        res.send("Something went wrong!!!!" + err);
      });
  },
};
