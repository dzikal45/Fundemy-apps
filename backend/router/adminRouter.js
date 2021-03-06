// import express from 'express';
const express = require('express');
const router = express.Router();
const adminController = require('../controller/admin/adminController');

const {verifyToken,permit} = require("../middleware/auth");


router.get('/',(req,res)=>{
 res.send('online');
});
// user router
router.post('/register',adminController.registerUser);
router.post('/login',adminController.authUser);
router.get('/getAllUser',permit('Admin'), adminController.getAllUser);
router.get('/getPembayaran',permit('Admin'), adminController.getPembayaran);
router.post('/editPembayaran',permit('Admin'), adminController.editPembayaran);

module.exports = router;
// export default UserRouter