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

    // console.log("OTP :",otp);

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
    // console.log("otpBody :", otpBody);

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

// signup

exports.signUp = async (req, res) => {
    try {
        // Fetch all data from req body
        const {
            firstName,
            lastName,
            middleName,
            dateOfBirth,
            age,
            gender,
            category,
            accountType,
            otp,
            contactNumber,
            aadharNumber,
        } = req.body;

        // Log incoming data for debugging
        console.log("Request Body:", req.body);

        // Validate entered data
        if (!firstName || !lastName || !middleName || !dateOfBirth || !age || !gender || !category || !accountType || !otp || !contactNumber || !aadharNumber) {
            console.log("Validation failed: missing fields");
            return res.status(403).json({
                success: false,
                message: "All Fields Are Required."
            });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ aadharNumber });
        if (existingUser) {
            console.log("User already registered");
            return res.status(400).json({
                success: false,
                message: "User Is Already Registered"
            });
        }

        // Find the most recent OTP stored in the database for the contact number
        const recentOtp = await OTP.findOne({ contactNumber }).sort({ createdAt: -1 }).limit(1);
        console.log("Recent OTP:", recentOtp);
        
        // Validate the OTP
        if (!recentOtp || otp !== recentOtp.otp) {
            console.log(!recentOtp ? "OTP not found" : "Invalid OTP");
            return res.status(400).json({
                success: false,
                message: !recentOtp ? "OTP Not Found" : "Invalid OTP",
            });
        }

        // Create additional profile for User
        const profileDetails = await Profile.create({
            firstName,
            middleName,
            lastName,
            gender,
            dateOfBirth,
            contactNumber,
            age,
            category
        });

        // Create the new user
        const newUser = await User.create({
            aadharNumber,
            contactNumber,
            accountType,
            additionalDetails: profileDetails._id,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`
        });

        console.log("New User:", newUser);
        
        // Return response
        return res.status(200).json({
            success: true,
            message: "User Registered Successfully",
            user: newUser
        });

    } catch (error) {
        console.log("Error in signup:", error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}


// login
exports.login = async(req,res)=>{
    try
    {
     
      //fetch email,password data from req body
 
      const{aadharNumber} = req.body;
 
      //validate data
      if(!aadharNumber)
      {
          return res.status(403).json({
             success:false,
                     message: `Please Fill up All the Required Fields`,
         
          });
      }
      //check user 
      
      const user = await User.findOne({aadharNumber}).populate("additionalDetails");
  
      if(!user)
      {
          return res.status(401).json({
              success:false,
              message: `User is not Registered with Us Please SignUp to Continue`,
             });
      }
  
      //generate jwt token after matching password
      
      if(aadharNumber === user.aadharNumber)
      {
        const payload = {
          aadharNumber:user.aadharNumber,
          id:user._id,
          accountType:user.accountType
        }
       
        const token = jwt.sign(payload,process.env.JWT_SECRET,{
          expiresIn:"2h",
        });
  
        user.token = token;
        
  
        //create cookie and send response
        const options = {
  
          expires:new Date(Date.now()+3*24*60*60*1000),
          httpOnly:true,
        }
  
        res.cookie("token",token,options).status(200).json({
          success:true,
          message:`User Login Success`,
          user,
          token,
        });
      }
      else{
          return res.status(401).json({
              success:false,
              message:"Aadharcard number is incorrect"
          });
      }
    }catch(error)
    {
      console.log(error);
 
      return res.status(500).json({
         success:false,
         message:"Login Failure, Please Try Again"
      });
    }
 
 }