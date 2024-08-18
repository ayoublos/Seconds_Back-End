const express = require("express");
const { getAllFood, getOneFood, createFood, deleteFood, updateFood } = require("../queries/food");
const food = express.Router();




food.get("/", async (req, res) => {
    const allFood = await getAllFood();
    if (allFood[0]) {
        res.status(200).json(allFood);
    } else {
        res.status(500).json({ error: "No food Found" });
    }
});

module.exports = food;