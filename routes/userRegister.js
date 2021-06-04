const mongoose = require("mongoose");
const ConfirmRequestSchema = require("../dbSchema.js/userSchema");
const mongoConnect = require("../mongoConnect");

// This would be used for the api of ADMIN to confirm the user registration.

const handleRegister = (apple) => {
  mongoConnect();
  const helloNow = new mongoose.model("userinfo", ConfirmRequestSchema);
  console.log("Boom Boom!!!!");
  console.log(apple);
  const createDocument = async () => {
    try {
      const myData = new helloNow({
        firstname: apple.firstname,
        lastname: apple.lastname,
        email: apple.email,
        gender: apple.gender,
        password: apple.password,
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
