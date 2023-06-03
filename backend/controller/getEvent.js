const Event = require("../models/eventSchema")

const getevents = async (req, res) => {
    // const Name=req.params.Name
    const getevent = await Event.find({})
    console.log(getevent)
    res.send(getevent)
}

module.exports = getevents