const fast2sms = require('fast-two-sms');
require('dotenv').config();

const sendOtp = async (phoneNumber, otp) => {
    try {
        // Set options including API key and message details
        const options = {
            authorization: process.env.FAST2SMS_API_KEY, // Read API key from environment variables
            message: `Your OTP is: ${otp}`,
            numbers: [phoneNumber],
        };

        const response = await fast2sms.sendMessage(options);
        console.log('Message sent successfully:', response);
        return response;
    } catch (error) {
        console.error('Error sending message:', error);
    }
};

module.exports = sendOtp;