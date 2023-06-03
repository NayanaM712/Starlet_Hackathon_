const mongoose=require("mongoose")
const blogSchema = new mongoose.Schema({
    title: String,
    date: String,
    description: String,
});

// Create a model for events
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog