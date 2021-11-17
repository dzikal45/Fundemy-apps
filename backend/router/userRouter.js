
const express = require('express');
const router = express.Router();
const userController = require('../controller/user/userController');
const User = require('../models/userModel');
const multer = require('multer');
const {verifyToken,permit} = require("../middleware/auth");
const authenticate = require("../middleware//authentication");

const storage = multer.memoryStorage();
const fileFilter = (req, file, next)=>{
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg'){
        next(null, true);
    }else{
        next(new Error('Please only upload jpeg, jpg, and png'), false);
    }
};
const upload = multer({ storage: storage ,
                        fileFilter: fileFilter});
router.get('/',(req,res)=>{
 res.send('online');
});

// user router
router.post('/register',userController.registerUser);
router.post('/login', userController.authUser);
router.post('/enrollment',permit('siswa'), userController.enrollCourse);
router.patch('/pembayaran/upload',upload.single("file"),permit('siswa'), userController.uploadPembayaran);
router.patch('/checkAnswer',permit('siswa'), userController.checkAnswer);
router.get('/profile/:username',permit('siswa'),userController.profileUser);
router.get('/getPembayaran/pending',permit('siswa'),userController.getPembayaranPending);
router.get('/getPembayaran',permit('siswa'),userController.getPembayaran);
router.get('/getPembayaran/:id',permit('siswa'),userController.getPembayaranById);
router.get('/getCourse',permit('siswa'),userController.getCourseEnroll);
router.get('/getAllCourse',permit('siswa','admin'),userController.getAllCourse);
router.get('/checkActive',permit('siswa'),userController.checkActive);

module.exports = router;