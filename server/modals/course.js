const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true,
        trim: true
    },
    courseDescription: {
        type: String,
        required: true,
        trim: true
    },
    whatYouWillLearn: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    thumbnail: {
        type: String
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    courseContent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Section"
    },
    ratingAndReviews: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "RatingAndReview"
    },
    tag: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag"
    },
    
    studentsEnrolled: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    ]
    
});

module.exports = mongoose.model("Course", courseSchema);