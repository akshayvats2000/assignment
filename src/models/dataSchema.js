const mongoose = require('mongoose');
const { Schema } = mongoose;

const dataSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    name:  {
        type: String,
        required: true
    },
    campus: {
        type: String,
        required: true
    },
    college: {
        type: String,
        required: true
    },
    score: {
        type: String,
        required: true
    },
    rounds: {
        type: String,
        required: true
    },
    problems: {
        type: String,
        required: true
    },
    result: {
        type: Boolean,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    views: {
        type: String,
        required: true
    },
    comments: {
        type: String,
        required: true
    },
    votes: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Data = mongoose.model('Data', dataSchema)

module.exports = Data