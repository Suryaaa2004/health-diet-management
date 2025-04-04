const mongoose = require("mongoose");

const ExerciseLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  exercise: String,
  duration: Number, // in minutes
  caloriesBurned: Number,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ExerciseLog", ExerciseLogSchema);
