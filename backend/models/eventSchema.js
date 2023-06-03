const mongoose=require("mongoose")
const eventSchema = new mongoose.Schema({
    title: String,
    date: String,
    location: String,
    description: String,
});

// Create a model for events
const Event = mongoose.model('Event', eventSchema);
module.exports = Event