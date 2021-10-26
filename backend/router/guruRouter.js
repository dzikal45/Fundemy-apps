// import express from 'express';
const express = require('express');
const router = express.Router();
const guruController = require('../controller/guru/guruController');

const {verifyToken,permit} = require("../middleware/auth");


router.get('/',(req,res)=>{
 res.send('online');
});
// user router
router.post('/register',guruController.registerUser);
router.post('/login', guruController.authUser);
router.get('/profile',permit(["guru"]),guruController.profileUser);

module.exports = router;
// export default UserRouter