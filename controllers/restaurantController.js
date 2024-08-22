const express = require("express");
const restaurants = express.Router();

const { getAllRestaurants } = require("../queries/restaurant.js");

restaurants.get("/", async (req, res) => {
    const restaurants = await getAllRestaurants();
    if (restaurants) {
        res.status(200).send(restaurants);
    } else {
        res.status(404).json({error: "No restaurants found"});
    }
})

module.exports = restaurants;   