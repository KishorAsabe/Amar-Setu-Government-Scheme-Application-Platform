const mongoose = require('mongoose');
const sendOtp = require('../utils/sendOtp'); 

const OTPSchema = new mongoose.Schema({
    contactNumber: {
        type: String,
        required: true,
        
    },
    otp: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 60 * 5 // The document will be removed after 5 minutes
    }
});

// Middleware to send OTP before saving the document
OTPSchema.pre('save', async function(next) {
    const doc = this;
    try {
        // Send OTP via SMS
        const response = await sendOtp(doc.contactNumber, doc.otp);
        console.log("OTP sent successfully", response);
    } catch (error) {
        console.error("Error while sending OTP:", error);
        throw error;
    }
    next();
});

module.exports = mongoose.model('OTP', OTPSchema);
