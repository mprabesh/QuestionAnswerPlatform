const mongoose = require("mongoose");

const dbSchema = new mongoose.Schema({
  name: { type: String, required: true },
  Answer: { type: String, required: true },
  QuestionID: { type: String, required: true },
});

module.exports = dbSchema;
