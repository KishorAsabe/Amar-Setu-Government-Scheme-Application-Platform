const mongoose = require("mongoose");
require("dotenv").config();



exports.connect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log("DB Connection Successful");
    })
    .catch((error) => {
        console.log("DB Connection Failed");
        console.error(error);
        process.exit(1);
    });
};


