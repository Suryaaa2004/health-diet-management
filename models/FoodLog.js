const mongoose = require("mongoose");

const FoodLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  food: String,
  calories: Number,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("FoodLog", FoodLogSchema);
