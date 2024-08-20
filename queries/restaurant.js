const db = require("../db/dbConfig.js");

const getAllRestaurants = async () => {
    try {
        const allRestaurants = await db.any("SELECT * FROM restaurants");
        return allRestaurants;
    } catch (error) {
        return {error: "All these restaurants don't exist"};
    }
};

//one restaurant
const getOneRestaurant = async (id) => {
    try {
        const oneRestaurant = await db.one("SELECT * FROM restaurants WHERE id=$1", id);
        return oneRestaurant;
    } catch (error) {
        return {error: "That restaurant does not exist"}
    }
};

//create
const createRestaurant = async (restaurant) => {
    try{
    const { name, img, cuisine, street1, street2, city, state,zipCode} = restaurant;
    const newRestaurant = await db.one("INSERT INTO restaurants (name, img, cuisine, street1, street2, city, state, zipCode)VALUES ($1, $2, $3, $4, $5, $6, $7,$8)RETURNING *", [name, img, cuisine, street1, street2, city, state, zipCode]);
        return newRestaurant;   
    } catch (error) {
        throw error;
    }
};

//delete
const deleteRestaurant = async (id) => {
    try {
        const deletedRestaurant = await db.one("DELETE FROM restaurants WHERE id=$1 RETURNING *", id);
        return deletedRestaurant;
    } catch (error) {
        return error;
    }
};

//update
const updateRestaurant = async (id, restaurant) => {
    try {
        const { name, img, cuisine, street1, street2, city, state, zipCode} = restaurant;
        const updatedRestaurant = await db.one("UPDATE restaurants SET name=$1, img=$2, cuisine=$3, street1=$4, street2=$5, city=$6, state=$7, zipCode=$8 WHERE id=$9 RETURNING *", [name, img, cuisine, street1, street2, city, state, zipCode, id]);
        return updatedRestaurant;
    } catch (error) {
        return error;
    }
};

module.exports = { getAllRestaurants , getOneRestaurant, createRestaurant, deleteRestaurant, updateRestaurant };