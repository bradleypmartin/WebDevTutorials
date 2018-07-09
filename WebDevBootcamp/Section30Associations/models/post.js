var mongoose = require("mongoose");

// POST - title, content 
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

// 'sort of a return value for a file (export)'
module.exports = mongoose.model("Post", postSchema);