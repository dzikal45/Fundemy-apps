// import Mongodb from "./connection/mongodb.js";
const express = require('express')
const app = express()
const cors = require('cors')
require('./connection/mongodb');
const bodyParser = require('body-parser');
const userRouter = require('./router/userRouter');
const guruRouter = require('./router/guruRouter');


app.use(express.json());
app.use("/api/user",userRouter);
app.use("/api/guru",guruRouter);
app.use(cors());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
const PORT = process.env.PORT || 5000;

// connect db
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)});


