const quoteModel = require("../Models/QuoteModel");

module.exports = {
  create: function (req, res) {
    quoteModel
      .create(req.body)
      .then(() => {
        res.send({ message: "Item inserted successfully" });
      })
      .catch((err) => {
        res.send({ message: "Some error occurred" + err });
      });
  },
  getAll: function (req, res) {
    quoteModel.find().then((results) => {
      res.send(results);
    });
  },
};
