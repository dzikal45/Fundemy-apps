// import express from 'express';
const express = require('express');
const router = express.Router();
const userController = require('../controller/user/userController');
const { body, validationResult } = require('express-validator');
const {verifyToken,permit} = require("../middleware/auth");
// import { authUser, registerUser, } from '../controllers/userController.js';

//router.route('/').post();

router.get('/',(req,res)=>{
 res.send('online');
});
// user router
router.post('/register',userController.registerUser);
router.post('/login', userController.authUser);
router.get('/profile',permit(["siswa"]),userController.profileUser);

module.exports = router;
// export default UserRouter