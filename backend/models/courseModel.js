import { ObjectId } from "bson";
import { Mongoose } from "mongoose";

const courseSchema = Mongoose.Schema({
    course_name:{
        type: String,
        required: true
    },
    course_description:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    grades:{
        type: String,
        required: true
    },
    
        review:{
            review_content:{
                type: String,
            },
            rating:{
                type: Number,
            },
            user_id:{
                type: ObjectId,
            },
        },
    
},
{
    timestamps: true
});

module.exports = Mongoose.model('Course',courseSchema);