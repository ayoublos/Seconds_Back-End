const db = require("../db/dbConfig.js");

const getAllRestaurants = async () => {
    try {
        const allRestaurants = await db.any("SELECT * FROM restaurants");
        return allRestaurants;
    } catch (error) {
        return {error: "Error in server"}
    }
};

module.exports = { getAllRestaurants };