const db = require("../db/dbConfig.js");

const getAllRestaurants = async () => {
    const allRestaurants = await db.any("SELECT * FROM restaurants");
    return allRestaurants;
};


module.exports = {
    getAllRestaurants
}