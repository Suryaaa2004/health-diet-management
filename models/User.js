const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  age: Number,
  weight: Number,
  height: Number,
  goal: String, // Lose weight, Maintain, Gain muscle
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);
