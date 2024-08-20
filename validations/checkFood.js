const checkFood = (req, res, next)=> {
    console.log("checking food...");
    next();
};


module.exports= { checkFood };