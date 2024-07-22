const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI).then(() => {
        console.log(`DB connected`)
    }).catch((err) => {
        console.log(`DB not connected ERROR:${err.message}`)
    })
};

module.exports = connectDB;