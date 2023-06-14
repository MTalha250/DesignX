const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connection Successfull"))
  .catch((err) => console.log("Connection Error" + err));
