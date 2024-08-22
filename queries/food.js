const db = require("../db/dbConfig.js");

const getAllFood = async () => {
    try {
        const allFood = await db.any("SELECT * FROM food");
        return allFood;
    } catch (error) {
        return {error: "Error in server"}
    }
};

const getOneFood = async (id) => {
    try {
        const oneFood = await db.one("SELECT * FROM food WHERE id=$1", id);
        return oneFood;
    } catch (error) {
        return {error: "Food Not Found"}
    }
};

const getOneFoodName = async (id) => {
    try {
        const oneFood = await db.one("SELECT food.*, restaurants.name AS restaurant_name FROM food JOIN restaurants ON food.restaurant_id = restaurants.id WHERE food.id=$1", id);
        return oneFood;
    } catch (error) {
        return {error: "Food Not Found"}
    }
}

const createFood = async (food) => {
    const { name, restaurant_food_id, rating, seconds, img, created_at, notification_date, restaurant_id } = food;
    
    const newFood = await db.one("INSERT INTO food (name, restaurant_food_id, rating, seconds, img, created_at, notification_date, restaurant_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
        [name, restaurant_food_id, rating, seconds, img, created_at, notification_date, restaurant_id]
    );
    return newFood;
}

const deleteFood = async (id) => {
    const deletedFood = await db.one("DELETE FROM food WHERE id=$1 RETURNING *", id);
    return deletedFood;
   
}

const updateFood = async (id, food) => {
    const { name, restaurant_food_id, rating, seconds, img, created_at, notification_date, restaurant_id } = food;
    const updatedFood = await db.one("UPDATE food SET name=$1, restaurant_food_id=$2, rating=$3, seconds=$4, img=$5, created_at=$6, notification_date=$7, restaurant_id=$8 WHERE id=$9 RETURNING *",
        [name, restaurant_food_id, rating, seconds, img, created_at, notification_date, restaurant_id, id]
    );
    return updatedFood;
}; 

module.exports = {
    getAllFood,
    getOneFood,
    createFood,
    deleteFood,
    updateFood,
    getOneFoodName
}