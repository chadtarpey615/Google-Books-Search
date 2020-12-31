const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const googleSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    image: { type: String, required: true},
    description:{ type: String, required: true},
    date: { type: Date, default: Date.now }
    
});

const Google = mongoose.model("Google", googleSchema);

module.exports = Google;