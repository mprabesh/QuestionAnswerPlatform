const mongoose = require("mongoose");
const answerSchema = require("../dbSchema.js/answerSchema");
const mongoConnect = require("../mongoConnect");

const handle = async (b) => {
  //   console.log(b);
  mongoConnect();
  const helloNow = new mongoose.model("answerinfo", answerSchema);
  const findSpecific = async () => {
    const credentials = { QuestionID: b };
    try {
      const hell = await helloNow.find(credentials);
      return hell;
    } catch (err) {
      console.log(err);
    }
  };

  const b2 = await findSpecific().then((a) => {
    return a;
  });
  return b2;
};

module.exports = handle;
