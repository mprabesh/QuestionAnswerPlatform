const mongoose = require("mongoose");

const mongoConnect = () => {
  mongoose
    .connect("mongodb://localhost:27017/mywebsite", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then()
    .catch((err) => console.log(err));
};

module.exports = mongoConnect;
