const jwt = require("jsonwebtoken");

const config = process.env;

const permit=(permittedRoles) => {
  // return a middleware
  return (req, res, next) => {
    const token =
    req.body.token || req.query.token || req.headers["x-access-token"];
  
    const authorize = req.body;
    try {
      const decoded = jwt.verify(token, config.SECRET_KEY);
      req.user = decoded;
    } catch (err) {
      res.status(401).send("Invalid Token");
    }
    // const { user } = req;
    // res.status(200).json(role);

    if (authorize && permittedRoles.includes(authorize.role)) {
      next(); // role is allowed, so continue on the next middleware
    } else {
      res.status(403).json({message: "Forbidden"}); // user is forbidden
    }
  }
}

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