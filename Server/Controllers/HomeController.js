const homeModel = require("../Models/HomeModel");
const cloudinary = require("cloudinary");

module.exports = {
  create: async function (req, res) {
    const result = await cloudinary.v2.uploader.upload(req.file.path, {
      folder: "DesignX",
      use_filename: true,
    });
    homeModel
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
    homeModel.find().then((results) => {
      res.send(results);
    });
  },
};
