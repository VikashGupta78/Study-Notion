const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    gender: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String
    },
    about: {
        type: String,
        trim: true
    },
    contact: {
        type: Number,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model("Profile", profileSchema);