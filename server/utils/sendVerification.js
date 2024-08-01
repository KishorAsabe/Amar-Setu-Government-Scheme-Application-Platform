
const { client, serviceSid } = require('../config/twilio');

const sendVerification = async (to, channel) => {
  if (!to.startsWith('+')) {
    // Assuming +91 is the default country code; adjust if needed
    to = `+91${to}`;
  }
  try {
    const verification = await client.verify.v2.services(serviceSid)
      .verifications
      .create({ to, channel });

    return { sid: verification.sid, message: 'OTP sent successfully' };
  } catch (error) {
    console.error('Error sending OTP:', error);
    throw new Error(error.message);
  }
};

module.exports = sendVerification;
