const Event = require("../models/eventSchema")
const schemafunction = async (req, res) => {
    const { title,date,location,description } = req.body
    const eventDetails = await Event.create({
        title,
        date,
        location,
        description,
        
    })
    console.log("user data")
    res.json(eventDetails)
}
module.exports = schemafunction