const mongoose = require("mongoose");
const postSchema = require("../dbSchema.js/postSchema");
const mongoConnect = require("../mongoConnect");

const handleGetRequest = async () => {
  mongoConnect();
  const helloNow = new mongoose.model("Postinfo", postSchema);
  const createDocument = async () => {
    try {
      var result1 = await helloNow.find();
      return result1;
    } catch (err) {
      console.log(err);
    }
  };
  const findSpecific = async () => {
    try {
      var result1 = await helloNow.find();
      return result1;
    } catch (err) {
      console.log(err);
    }
  };

  const b2 = await createDocument().then((a) => {
    return a;
  });
  return b2;
};
module.exports = handleGetRequest;
