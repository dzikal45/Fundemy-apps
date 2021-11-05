module.exports =async function authorize(req,res, next) {
    const token =
    req.body.token || req.query.token || req.headers["x-access-token"];
   const role = req.body.role;

  if (!token) {
    res.status(403).send("A token is required for authentication");
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
  
       
    // always continue to next middleware
    next();
  }
 