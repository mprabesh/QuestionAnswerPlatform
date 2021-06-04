const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const newRequestSchema = require("../dbSchema.js/newRequest");
const mongoConnect = require("../mongoConnect");

router.get("/requests", (req, res) => {
  mongoConnect();
  const helloNow = new mongoose.model("newrequestinfo", newRequestSchema);
  const getData = async () => {
    try {
      const hell = await helloNow.find();
      const pop = {};
      console.log(hell);
      res.json(hell);
    } catch (err) {
      console.log(err);
    }
  };
  getData();
});

module.exports = router;
