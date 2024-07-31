
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    contactNumber: {
        type: String,
        required: function() {
            return this.accountType === 'Beneficiary';
        },
    },
    aadharNumber: {
        type: String,
        sparse: true, 
        unique: function() {
            return this.accountType === 'Beneficiary';
        },
    },
    email: {
        type: String,
        required: function() {
            return this.accountType !== 'Beneficiary';
        },
        unique: function() {
            return this.accountType !== 'Beneficiary';
        },
    },
    password: {
        type: String,
        required: function() {
            return this.accountType !== 'Beneficiary';
        },
    },
    accountType: {
        type: String,
        required: true,
        enum: ['Admin', 'Beneficiary', 'Operator'],
    },
    additionalDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Profile",
    },
    token: {
        type: String,
    },
    image: {
        type: String,
    },
}, { timestamps: true });


// userSchema.index({ aadharNumber: 1 }, { unique: true, sparse: true });

module.exports = mongoose.model("User", userSchema);
