const homeModel = require("../Models/HomeModel");

module.exports = {
  create: function (req, res) {
    homeModel
      .create({
        img: req.file.path,
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
