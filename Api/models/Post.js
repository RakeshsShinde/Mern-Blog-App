const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: false,
    },

    username: {
        type: String,
        required: true,
    },

    userprofile: {
        type: String,
        required: false,
    },

    category: {
        type: String,
        required: false,
    }
}, { timestamps: true }
)
module.exports = mongoose.model("Post", postSchema);