const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Welcome to Seconds App");
  });
  // EXPORT
module.exports = app;