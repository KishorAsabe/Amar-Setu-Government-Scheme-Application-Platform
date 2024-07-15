const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    contactNumber:{
        type:String,
        required:true,
    },

    aadharNumber:{
        type:String,
        required:true,
        unique:true,
    },
    accountType:{
        type:String,
        required:true,
        enum:['Admin','Beneiciary','Operator']
    },
    additionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Profile",
    },
    token:{
        type:String,
    },
    image:{
        type:String
    },

    // approved:{
    //     type:Boolean,
    //     default:true
    // }

},{timestamps:true});
module.exports = mongoose.model("User",userSchema);