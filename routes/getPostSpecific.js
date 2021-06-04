const mongoose = require("mongoose");
const postSchema = require("../dbSchema.js/postSchema");
const mongoConnect = require("../mongoConnect");

const handleGetRequest = async (d) => {
  mongoConnect();
  const helloNow = new mongoose.model("Postinfo", postSchema);

  const findSpecific = async () => {
    const credentials = { name: d };
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
module.exports = handleGetRequest;
