const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected")).catch(err => console.log(err));

// Routes
const foodLogRoutes = require("./routes/foodlog");
app.use("/api/foodlog", foodLogRoutes);

const exerciseLogRoutes = require("./routes/exerciselog");
app.use("/api/exerciselog", exerciseLogRoutes);
app.get("/", (req, res) => res.send("Health and Diet Management API Running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));