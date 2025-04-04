const express = require("express");
const ExerciseLog = require("../models/ExerciseLog");
const router = express.Router();

router.post("/log", async (req, res) => {
  const { userId, exercise, duration, caloriesBurned } = req.body;
  try {
    const log = await ExerciseLog.create({ userId, exercise, duration, caloriesBurned });
    res.json({ message: "Exercise logged successfully", log });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/:userId", async (req, res) => {
  const logs = await ExerciseLog.find({ userId: req.params.userId });
  res.json(logs);
});

module.exports = router;
