const mongoose = require("mongoose");
const answerSchema = require("../dbSchema.js/answerSchema");
const mongoConnect = require("../mongoConnect");

const handleMongoDB = (apple) => {
  mongoConnect();

  const helloNow = new mongoose.model("Answerinfo", answerSchema);

  const createDocument = async () => {
    try {
      const myData = new helloNow({
        name: apple.name,
        Answer: apple.Answer,
        QuestionID: apple.QuestionID,
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
