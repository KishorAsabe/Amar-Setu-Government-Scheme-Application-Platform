const express = require('express');
const router = express.Router();

//import controllers
const {sendOTP } = require('../controllers/Auth');

// middlwware
const {auth} = require("../middleware/auth");


// Route for sendOtp 
router.post('/sendOtp',sendOTP);

// export the routes
module.exports = router;