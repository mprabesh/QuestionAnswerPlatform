const mongoose = require("mongoose");
const userSchema = require("../dbSchema.js/userSchema");
const mongoConnect = require("../mongoConnect");

const handle = async () => {
  //   console.log(b);
  mongoConnect();
  const helloNow = new mongoose.model("userinfo", userSchema);
  const findSpecific = async () => {
    const credentials = { firstname: /p/i, email: /p/i };
    try {
      const hell = await helloNow.find();
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
