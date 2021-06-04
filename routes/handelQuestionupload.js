const mongoose = require("mongoose");
const postSchema = require("../dbSchema.js/postSchema");
const mongoConnect = require("../mongoConnect");

const handleMongoDB = (apple) => {
  mongoConnect();

  const helloNow = new mongoose.model("Postinfo", postSchema);

  const createDocument = async () => {
    try {
      const myData = new helloNow({
        name: apple.name,
        Question: apple.Question,
      });
      const result = await myData.save();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
  createDocument();
};

module.exports = handleMongoDB;
