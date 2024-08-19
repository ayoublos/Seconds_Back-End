const cors = require("cors");
const express = require("express");
const foodController = require("./controllers/foodController");

// CONFIGURATION
const app = express();



// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/food", foodController);


// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Seconds App");
  });
  
app.get("*", (req, res) => {
  res.status(404).send("No Food here");
});

// EXPORT
module.exports = app;