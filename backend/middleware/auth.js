const jwt = require("jsonwebtoken");
const expressAsyncHandler = require('express-async-handler');
const { func } = require("joi");
const config = process.env;
const multer = require('multer');


const permit=(...permittedRoles) => {
  // return a middleware
  return (req, res, next) => {
    const token =
    req.body.token || req.query.token || req.headers["x-access-token"];
  
    const authorize = req.body;
    try {
      const decoded = jwt.verify(token, config.SECRET_KEY);
      req.user = decoded;
      // Setting up multer as a middleware to grab photo uploads
     
      // res.send(decoded);
      if (permittedRoles.includes(req.user.role)) {
        return next(); // role is allowed, so continue on the next middleware
      } else {
        res.status(403).json({message: "Forbidden"}); // user is forbidden
      }
    
    } catch (err) {
      res.status(401).send("Invalid Token");
    }

   
  }
}

const checkRole = expressAsyncHandler(async function (req,res,next,userModel){
  const{id}= req.user.id;
  const userRole = await userModel.findOne({id})
  res.send(userRole);  
  if (authorize && permittedRoles.includes(authorize.role)) {
    return next(); // role is allowed, so continue on the next middleware
  } else {
    res.status(403).json({message: "Forbidden"}); // user is forbidden
  }
})

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];
   const role = req.body.role;

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  
  // if(!role || role != permitRole ){
  //   return res.status(401).send("role not allowed");
  // }
  try {
    const decoded = jwt.verify(token, config.SECRET_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = {verifyToken,permit};