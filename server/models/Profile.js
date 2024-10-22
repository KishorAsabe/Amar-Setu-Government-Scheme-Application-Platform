const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    middleName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true
    },
    dateOfBirth:{
        type:String,
    },
    gender:{
        type:String,
        enum:["Male", "Female","Other"],
    },
    age:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        required:true,
        enum:["General","Other Backward Class (OBC)","Scheduled Caste (SC)","Scheduled Tribe (ST)" ],
    
    },
   

})

module.exports = mongoose.model('Profile',profileSchema);