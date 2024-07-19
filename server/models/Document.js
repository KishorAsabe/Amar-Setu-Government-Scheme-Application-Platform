const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    docType: {
        type: String,
        enum: ['AADHAAR', 'PAN_CARD', 'DRIVING_LICENSE', 'INCOME_CERTIFICATE'],
        required: true
    },
    uri: {
        type: String,
        required: true
    },
    mime: {
        type: String,
        required: true
    },
    // Additional fields for tracking status and updates
    // status: {
    //     type: String,
    //     enum: ['Pending', 'Verified', 'Rejected'],
    //     default: 'Pending'
    // },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Document', documentSchema);
