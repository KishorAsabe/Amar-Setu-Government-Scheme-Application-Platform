
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    contactNumber: {
        type: String,
        required: function() {
            return this.accountType === 'Beneiciary';
        },
    },
    aadharNumber: {
        type: String,
        sparse: true, 
        unique: function() {
            return this.accountType === 'Beneiciary';
        },
    },
    email: {
        type: String,
        required: function() {
            return this.accountType !== 'Beneiciary';
        },
        unique: function() {
            return this.accountType !== 'Beneiciary';
        },
    },
    password: {
        type: String,
        required: function() {
            return this.accountType !== 'Beneiciary';
        },
    },
    accountType: {
        type: String,
        required: true,
        enum: ['Admin', 'Beneiciary', 'Operator'],
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
