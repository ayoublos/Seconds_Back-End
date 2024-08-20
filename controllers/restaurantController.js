const express = require("express");
const { getOneRestaurant, getAllRestaurants, createRestaurant, updateRestaurant, deleteRestaurant } = require("../queries/restaurant");
const restaurants = express.Router();
const {checkRestaurant} = require("../validations/checkRestaurant");

//INDEX
restaurants.get("/", async (req, res) => {
    const allRestaurants = await getAllRestaurants();
    if (allRestaurants[0]) {
        res.status(200).json(allRestaurants);
    } else {
        res.status(500).json({ error: "server error" });
    }
});

module.exports = restaurants;