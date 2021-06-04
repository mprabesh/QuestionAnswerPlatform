const mongoose = require("mongoose");

const dbSchema = new mongoose.Schema({
  Firstname: { type: String, required: true },
  Lastname: { type: String, required: true },
  Email: { type: String, required: true, unique: true },
  Gender: { type: String, required: true },
  Password: { type: String, required: true },
});

module.exports = dbSchema;
