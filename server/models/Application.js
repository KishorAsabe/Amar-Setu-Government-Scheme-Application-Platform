const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    schemeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Scheme',
        required: true
    },
    documents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Document'
    }],
    status: {
        type: String,
        enum: ['Submitted', 'Verification In Progress', 'Additional Information Required', 'Under Review', 'Approved', 'Payment Processing', 'Final Processing', 'Completed', 'Revoked'],
        default: 'Submitted'
    },
    additionalInfoRequired: [{
        type: String
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Application', applicationSchema);
