const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, "Discription is required"],
    },
    source: {
        type: String,
        required: [true, "Source is required"],
    },
    category: {
        type: String,
        required: [true, "Category is required"],
    },
    votesInteresting: {
        type: Number,
        default: Math.round(Math.random() * 30) + 1,
    },
    votesMindblowing: {
        type: Number,
        default: Math.round(Math.random() * 10) + 1,
    },
    votesFalse: {
        type: Number,
        default: Math.round(Math.random() * 5) + 1,
    }

}, { timestamps: true })

const newsModel = mongoose.model("News", newsSchema);

module.exports = newsModel;