// import Mongodb from "./connection/mongodb.js";
const express = require('express')
const app = express()
const cors = require('cors')
require('./connection/mongodb');
const bodyParser = require('body-parser');
const userRouter = require('./router/userRouter');
const guruRouter = require('./router/guruRouter');
const adminRouter = require('./router/adminRouter');
const config = require('./utils/config');
const cookieParser = require('cookie-parser');
var multer = require('multer');
var upload = multer();
const firebase = require('./connection/db');
// const corsOptions = {
//   origin: '*',
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// }

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use("/api/user",userRouter);
app.use("/api/admin",adminRouter);
app.use("/api/guru",guruRouter);
app.use(cors());
app.options('*', cors());

const PORT = process.env.PORT || 5000;

// connect db
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)});


