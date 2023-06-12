const showcaseModel = require("../Models/ShowcaseModel");

module.exports = {
  create: function (req, res) {
    showcaseModel
      .create(req.body)
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
