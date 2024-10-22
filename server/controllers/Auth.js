const User = require("../models/User");
const jwt = require("jsonwebtoken");
const Profile = require("../models/Profile");
const sendVerification = require("../utils/sendVerification");
const verifyOTP = require("../utils/verifyOTP");
require("dotenv").config();


exports.sendOTP = async (req, res) => {
  let { to } = req.body;
  const channel = "sms"
  if (!to) {
    return res.status(400).json({
      success: false,
      message: 'Phone number is required.',
    });
  }
  // Ensure the phone number includes the country code
  if (!to.startsWith('+')) {
    // Assuming +91 is the default country code; adjust if needed
    to = `+91${to}`;
  }
  

  try {
    // Call sendVerification with the correctly formatted phone number
    const result = await sendVerification(to, channel);
    console.log("result", result);
    return res.status(200).json({
      success: true,
      message: "OTP sent successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


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
      otp,
      accountType,
      contactNumber,
      aadharNumber,
    } = req.body;

    // Log incoming data for debugging
    console.log("Request Body:", req.body);

    // Validate entered data
    if (
      !firstName ||
      !lastName ||
      !middleName ||
      !dateOfBirth ||
      !age ||
      !gender ||
      !category ||
      !otp ||
      !contactNumber ||
      !aadharNumber||
      !accountType
    ) {
      console.log("Validation failed: missing fields");
      return res.status(403).json({
        success: false,
        message: "All Fields Are Required.",
      });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ aadharNumber });
    if (existingUser) {
      console.log("User already registered");
      return res.status(400).json({
        success: false,
        message: "User Is Already Registered",
      });
    }

    //otp verifiaction
    const verifyResult = await verifyOTP(contactNumber, otp);
    if (!verifyResult.success) {
      console.log("OTP Verification Failed");
      return res.status(400).json({
        success: false,
        message: verifyResult.message,
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
      category,
    });

    // Create the new user
    const newUser = await User.create({
      aadharNumber,
      contactNumber,
      accountType,
      additionalDetails: profileDetails._id,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
    });

    console.log("New User:", newUser);

    const token = jwt.sign(
      { userId: newUser._id, accountType: newUser.accountType },
      process.env.JWT_SECRET, 
      { expiresIn: '1h' } 
    );
     

    // Return response
    return res.status(200).json({
      success: true,
      message: "User Registered Successfully",
      user: newUser,
    });
  } catch (error) {
    console.log("Error in signup:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// login
exports.login = async (req, res) => {
  try {
    //fetch email,password data from req body

    //   const{aadharNumber} = req.body;
    const { email, password, aadharNumber, accountType } = req.body;
    let user;
    if (aadharNumber) {
      //validate data
      if (!aadharNumber) {
        return res.status(403).json({
          success: false,
          message: `Please Fill up All the Required Fields`,
        });
      }
      //check user

      user = await User.findOne({ aadharNumber }).populate("additionalDetails");

      if (!user) {
        return res.status(401).json({
          success: false,
          message: `User is not Registered with Us Please SignUp to Continue`,
        });
      }

      //generate jwt token after matching password

      if (aadharNumber === user.aadharNumber) {
        const payload = {
          aadharNumber: user.aadharNumber,
          id: user._id,
          accountType: user.accountType,
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "2h",
        });

        user.token = token;

        //create cookie and send response
        const options = {
          expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
          httpOnly: true,
        };

        res.cookie("token", token, options).status(200).json({
          success: true,
          message: `User Login Success`,
          user,
          token,
        });
      } else {
        return res.status(401).json({
          success: false,
          message: "Aadharcard number is incorrect",
        });
      }
    } else if (email && password && accountType) {
      if (!["Admin", "Operator"].includes(accountType)) {
        return res.status(400).json({
          success: false,
          message: "Invalid account type provided.",
        });
      }

      user = await User.findOne({ email });
      //   .populate(
      //     "additionalDetails"
      //   );

      if (!user) {
        return res.status(401).json({
          success: false,
          message:
            "User is not registered with us. Please sign up to continue.",
        });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(401).json({
          success: false,
          message: "Email or password is incorrect.",
        });
      }

      const payload = {
        userId: user._id,
        accountType: user.accountType,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });

      user.token = token;

      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      return res.cookie("token", token, options).status(200).json({
        success: true,
        message: "Admin/Operator login successful.",
        user,
        token,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Please provide the required credentials.",
      });
    }
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Login Failure, Please Try Again",
    });
  }
};


