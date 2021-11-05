// import express from 'express';
const express = require('express');
const router = express.Router();
const userController = require('../controller/user/userController');
const User = require('../models/userModel');

const {verifyToken,permit} = require("../middleware/auth");
const authenticate = require("../middleware//authentication");

router.get('/',(req,res)=>{
 res.send('online');
});
// user router
router.post('/register',userController.registerUser);
router.post('/login', userController.authUser);
router.get('/profile/:username',permit('siswa'),userController.profileUser);

module.exports = router;
// export default UserRouter