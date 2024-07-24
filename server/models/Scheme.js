const mongoose = require('mongoose');

const schemeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    shortDescription: { 
        type: String,
        required: true,
        trim: true
    },
    details: {
        type: String,
        required: true
    },
    benefits: {
        type: [String],
        required: true
    },
    eligibility: {
        type: [String],
        required: true
    },
    documentsRequired: {
        type: [String],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    applicationStartDate: {
        type: Date,
        required: true
    },
    applicationEndDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['Active', 'Inactive'],
        default: 'Active'
    }
});

module.exports = mongoose.model('Scheme', schemeSchema);
