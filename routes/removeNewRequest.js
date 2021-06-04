const mongoose = require("mongoose");
const mongoConnect = require("../mongoConnect");
const newRequest = require("../dbSchema.js/newRequest");

const handleRegister = (apple) => {
  mongoConnect();
  console.log("DElete Section");
  const deleteNow = new mongoose.model("newrequestinfo", newRequest);
  const deleteDocument = async () => {
    try {
      await deleteNow.deleteOne({ Email: apple.email });
      console.log("data deleted");
    } catch (err) {
      console.log(err);
    }
  };
  deleteDocument();
};
module.exports = handleRegister;
