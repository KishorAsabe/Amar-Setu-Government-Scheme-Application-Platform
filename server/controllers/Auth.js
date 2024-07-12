const User = require('../models/User');
const OTP = require('../models/Otp');
const jwt = require("jsonwebtoken");
const sendOtp = require("../utils/sendOtp");
const Profile = require("../models/Profile");
const otpGenerator = require('otp-generator');

require("dotenv").config();

// send otp
exports.sendOTP = async(req,res)=>{
try{
    const {contactNumber,aadharNumber} = req.body;
     
    const checkUserPresent = await User.findOne({aadharNumber});
    if(checkUserPresent)//if present
    {
        return res.status(401).json({
            success:false,
            message:"User Is Already Registered."
        })
    }

    // generate otp
    var otp = otpGenerator.generate(4,{
        upperCaseAlphabets:false,
        lowerCaseAlphabets:false,
        specialChars:false,
    });

    console.log("OTP :",otp);

    let result = await OTP.findOne({otp:otp});
    while(result) // if simliar entery found -> generate new otp
    {
        otp = otpGenerator.geneate(6,{
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false,
        });
    }

    result = await OTP.findOne({otp:otp});
    const otpPayload = {contactNumber,otp};

    const otpBody = await OTP.create(otpPayload);
    console.log("otpBody :", otpBody);

    return res.status(200).json({
        success:true,
        message:"OTP Sent Successfully.",
        otp
    })
}catch(error){

    console.log(error);
    return res.status(200).json({
        success:false,
        message:error.message
        
    })

}
}
