const express = require("express");
const FoodLog = require("../models/FoodLog");
const router = express.Router();

router.post("/log", async (req, res) => {
  const { userId, food, calories } = req.body;
  try {
    const log = await FoodLog.create({ userId, food, calories });
    res.json({ message: "Food logged successfully", log });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/:userId", async (req, res) => {
  const logs = await FoodLog.find({ userId: req.params.userId });
  res.json(logs);
});

module.exports = router;
