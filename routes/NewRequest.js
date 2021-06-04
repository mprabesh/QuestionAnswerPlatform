const mongoose = require("mongoose");
const newRequestSchema = require("../dbSchema.js/newRequest");
const mongoConnect = require("../mongoConnect");

const handleRegister = (apple) => {
  mongoConnect();
  const helloNow = new mongoose.model("NewRequestinfo", newRequestSchema);

  console.log(apple);
  console.log("New Requests");
  const createDocument = async () => {
    try {
      const myData = new helloNow({
        Firstname: apple.firstname,
        Lastname: apple.lastname,
        Email: apple.email,
        Gender: apple.gender,
        Password: apple.password,
      });
      const result = await myData.save();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
  createDocument();
};

module.exports = handleRegister;
