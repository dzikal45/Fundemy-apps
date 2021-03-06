const expressAsyncHandler = require('express-async-handler');
const generateToken = require('../../utils/generateToken');
const admin = require('../../models/adminModel');
const User = require('../../models/userModel')
var Crytpojs = require('crypto-js'); 
const{registerValidation,loginValidation} = require('../../validation');
const { response } = require('express');

exports.authUser = expressAsyncHandler(async(req,res) => {
    
    const { username, password } = req.body

    const{error} = loginValidation(req.body);
    if(error)res.status(400).send(error.details[0].message);

    const Admin = await admin.findOne({ username })
    const hashedPassword = Crytpojs.AES.decrypt(
        Admin.password,
        process.env.SECRET_KEY
    ).toString(Crytpojs.enc.Utf8);


    if(password == hashedPassword){

        res.json({
            _id: Admin._id,
            name: Admin.name,
            email: Admin.email,
            username: Admin.username,
            role: Admin.role,
            token: generateToken.generate(Admin._id,Admin.role,Admin.username)
        })
    }
    else{
        res.status(401);
        throw new Error('Invalid username or password!')
    }
})

// @desc Register a new Admin
// @route POST api/users/
// @access Public     

exports.registerUser = expressAsyncHandler(async(req,res) => {
    const { name, email, password, username } = req.body;
   const{error} = registerValidation(req.body);

   if(error)res.status(400).send(error.details[0].message);
   

    // res.json(nilai);
    const userExists = await admin.findOne({ 
        $or: [
            {'username' :username},
            {'email':email}
        ]
    })
    
    if(userExists){
        res.status(400);
        throw new Error(`User has already exist `)
    }

    const role = 'Admin';
    const Admin = await admin.create({
        name,
        email,
        password :Crytpojs.AES.encrypt(
            password,
            process.env.SECRET_KEY
        ).toString(),
        username,
        role
        // token: generateToken.generate(Admin._id)

    })

    if(Admin){
        res.status(201).json({
            _id: Admin._id,
            name: Admin.name,
            email: Admin.email,
            username: Admin.username,
            role: Admin.role
            // token: generateToken.generate(user._id)
        })
    }
    else{
        res.status(400);
        throw new Error(`Invalid user data`)
    }
})
exports.profileUser = expressAsyncHandler(async(req,res)=>{
    const { id} = req.params._id;
    const Admin = await admin.findOne({id })

    if(Admin){
        res.status(201).json({
            _id: Admin._id,
            name: Admin.name,
            email: Admin.email,
            username: Admin.username,
            role: Admin.role,
           
           

            // token: generateToken.generate(user._id)
        })
    }
    else{
        res.status(400);
        throw new Error(`User doesnt exist`)
    }


})
exports.getAllUser = expressAsyncHandler(async(req,res)=>{
 const userCollection= await  User.find()
   .then((response)=>{
       res.json({
           response,
       })
   }).catch((error)=>{
       res.json({
           message:error,
       })
   });

    res.json(userCollection);
})

exports.getPembayaran = expressAsyncHandler(async(req,res)=>{
    const user = await User.find();
    const arr = user;
    
//  res.send(arr[1].pesanan)
    const pembayaran = [];
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr[i].pesanan.length;j++){
            if(arr[i].pesanan[j].invoice_status=="pending" ){
              
                pembayaran.push(arr[i]);
            }

        }

        
        // console.log(pembayaran)
    }
    res.status(200).json(pembayaran)  
})
exports.editPembayaran = expressAsyncHandler(async(req,res)=>{
    const {user_id,invoice_status,invoiceId} = req.body;

    const user = await User.findById(user_id);
    var d = new Date(Date.now());
    
    
    const arr = user.pesanan
    
    
    
    const result = arr.find(function(element){
        return element.invoiceId == invoiceId 
    })
    var date ;
    if(result.subcribe == "3 month"){
        date == d.setMonth(d.getMonth() + 3);
    }else if(result.subcribe == "6 month"){
        date == d.setMonth(d.getMonth()+6 );
    }else if(result.subscribe == "1 year"){
        date == d.setMonth(d.getMonth() + 12);
    }
    
    result.invoice_status = invoice_status;
    const active = await User.findOneAndUpdate({_id:user_id},{activeBefore:date},{new: true})
     await user.save();

    res.status(201).json(result.invoice_status);







    // const pembayaran
})