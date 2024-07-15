const express = require('express');
const router = express.Router();

//import controllers
const {sendOTP,signUp,login } = require('../controllers/Auth');

// middlwware
const {auth} = require("../middleware/auth");


// Route for sendOtp 
router.post('/sendOtp',sendOTP);
router.post('/signup',signUp);
router.post('/login',login);


// export the routes
module.exports = router;