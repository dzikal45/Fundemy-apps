
const mongoose = require('mongoose');

const { string } = require('joi');
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    
    pesanan:[{
        invoiceId :{
            type:String,
            unique: true,
            sparse: true,
            // default : null
        },
        invoiceFile:{
            type:String,
            
            sparse: true,
           // default : null
        },
        invoice_date:{
            type: Date,
            
            sparse: true,
            //default : null

        },
        invoice_status:{
            type:String,
            
            sparse: true,
           // default : null
        },
       
        total_payment:{
            type: Number,
        
            sparse: true,
           // default : null
        },
        subscribe:{
            type: String,
            sparse: true
        },
       
    }],
    activeBefore:{
        type:Date,
        sparse:true,
        default:null,
    },
    
    course_enrollment:[{
        date_enrollment:{
            type: Date,
            
            sparse: true,
            
        },
        date_of_completion:{
            type: Date,
        
            sparse: true,
            default:null,
            
        },
        course_name:{
            type:String,
            sparse:true
        }
    }],
    course_id:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        sparse: true,
        
    }],
    role:{
        type: String,
        require: true
    },

}, {
    timestamps: true
});






module.exports = mongoose.model('userRegister',userSchema);



// export default User.js;