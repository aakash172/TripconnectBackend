const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const user = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});
