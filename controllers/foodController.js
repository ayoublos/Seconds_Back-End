const express = require("express");
const { getAllFood, getOneFood, createFood, deleteFood, updateFood } = require("../queries/food");
const food = express.Router();


//INDEX
food.get("/", async (req, res) => {
    const allFood = await getAllFood();
    if (allFood[0]) {
        res.status(200).json(allFood);
    } else {
        res.status(500).json({ error: "No food Found" });
    }
});

//SHOW
 food.get("/:id" , async (req, res) => {
    const { id } = req.params;
    const oneFood =await getOneFood(id);
    if (oneFood) {
        res.json(oneFood);
    } else {
        res.status(404).json({ error: "OneFood not found" });
    }
})


//CREATE
food.post("/", async (req, res) => {
     const newFood = await createFood(req.body);
        res.status(201).json(newFood); 
});

//DELETE
food.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedFood = await deleteFood(id);
    if (deletedFood.id) {
        res.status(200).json(deletedFood);
    } else {
        res.status(404).json({ error: "deletedFood not found" });
    }
});

//UPDATE
food.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedFood = await updateFood(id, req.body);
    res.status(200).json(updatedFood);
});

module.exports = food;