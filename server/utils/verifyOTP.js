const { client, serviceSid } = require("../config/twilio");

const verifyOTP = async (to, code) => {
  try {
    
    if (!to.startsWith('+')) {
      // Assuming +91 is the default country code; adjust if needed
      to = `+91${to}`;
    }
    
    const verificationCheck = await client.verify.v2
      .services(serviceSid)
      .verificationChecks.create({ to, code });

    if (verificationCheck.status === "approved") {
      return { success: true, message: "OTP verified successfully" };
    } else {
      return { success: false, message: "Invalid OTP" };
    }
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return { success: false, message: error.message };
  }
};

module.exports = verifyOTP;
