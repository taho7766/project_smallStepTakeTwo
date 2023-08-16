const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 1000,
    },
    technologies: [{
        type: String,
        required: true,
    }],
    imageURL: {
        type: String,
        default: "/images/default_no_image.png"
    },
    projectURL: {
        type: String,
        required: true,
    },
    dateAdded: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Project', ProjectSchema);