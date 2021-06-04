const mongoose = require("mongoose");

const dbSchema = new mongoose.Schema({
  name: { type: String, required: true },
  Question: { type: String, required: true },
});

module.exports = dbSchema;
