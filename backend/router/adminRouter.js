// import express from 'express';
const express = require('express');
const router = express.Router();
const adminController = require('../controller/admin/adminController');

const {verifyToken,permit} = require("../middleware/auth");


router.get('/',(req,res)=>{
 res.send('online');
});
// user router
router.post('/register',permit('admin'),adminController.registerUser);
router.post('/login', permit('admin'),adminController.authUser);
router.post('/getAllUser',permit('admin'), adminController.getAllUser);

module.exports = router;
// export default UserRouter