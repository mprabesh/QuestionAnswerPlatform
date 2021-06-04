const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const userSchema = require("./dbSchema.js/userSchema");
const mongoConnect = require("./mongoConnect");
const jwt = require("jsonwebtoken");
const secret_key = "ajshdja763g37dhjs623ghwdwtdw67676d7w";

router.use("/login", (req, res, next) => {
  console.log(req.body.values);
  mongoConnect();
  const apple = req.body.values;
  const helloNow = new mongoose.model("Userinfo", userSchema);
  const CheckCredentials = async () => {
    const credentials = { email: apple.email };
    try {
      await helloNow.findOne(credentials, (err, result) => {
        const a = result.firstname;
        const b = result.lastname;
        const name = a.concat(" " + b);
        console.log(name);
        if (!err) {
          if (apple.password === result.password) {
            console.log("Password is true");
            jwt.sign(apple, secret_key, (err, data) => {
              if (!err) {
                console.log(data);
                const data1 = {
                  token: data,
                  Name: name,
                  isAuth: true,
                  role: "user",
                };
                res.json(data1).sendStatus(200);
              } else {
                console.log(`error in json creaction ${err}`);
              }
            });
          }
        } else {
          console.log(err);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  CheckCredentials();
  next();
});

module.exports = router;
