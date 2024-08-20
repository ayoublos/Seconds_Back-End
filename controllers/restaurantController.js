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
        res.status(500).json({ error: "no restaurants found" });
    }
});

//SHOW
restaurants.get("/:restaurant_id", async (req, res) => {
    const { restaurant_id } = req.params;
    const oneRestaurant = await getOneRestaurant(restaurant_id);
    if (oneRestaurant) {
        res.json(oneRestaurant);
    } else {
        res.status(404).json({ error: "one restaurant not found" });
    }
});

//CREATE
restaurants.post("/", checkRestaurant, async (req, res) => {
    const newRestaurant = await createRestaurant(req.body);
    if (newRestaurant.id) {
        res.status(200).json(newRestaurant);
    } else {
        res.status(500).json({ error: "Restaurant not created" });
    }
  });

  //DELETE
  restaurants.delete("/:restaurant_id", async (req, res) => {
    const { restaurant_id } = req.params;
    const deletedRestaurant = await deleteRestaurant(restaurant_id);
    if (deletedRestaurant.id) {
        res.status(200).json(deletedRestaurant);
    } else {
        res.status(404).json({ error: "Restaurant not found" });
    }
    });

    //UPDATE
    restaurants.put("/:restaurant_id", checkRestaurant, async (req, res) => {
        const { restaurant_id } = req.params;
        const updatedRestaurant = await updateRestaurant(restaurant_id, req.body);
        if (updatedRestaurant.id) {
            res.status(200).json(updatedRestaurant);
        } else {
            res.status(404).json({ error: "You are unable to update this restaurant" });
        }
    });

module.exports = restaurants;