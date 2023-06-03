
const mongoose = require("mongoose")
const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://nayanamdinesh:nmjdpnkma712217@cluster1.2b9bkkb.mongodb.net/", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Database connected ok")
    } catch (error) {
        console.log(`Error:${error}`) 
        process.exit()
    }
}
module.exports = connectDB