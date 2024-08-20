const checkRestaurant = (req, res, next) => {
    console.log("checking restaurant...");
    next();
};


module.exports= { checkRestaurant };