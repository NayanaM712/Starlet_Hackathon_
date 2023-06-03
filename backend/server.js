const express = require("express")
const router = require("./Router/TestRouter")
// const dotenv = require("dotenv")
const connectDB = require("./Database/db")
const cors = require("cors")
connectDB()

// dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
app.use("/", router)




const port = process.env.port || 4009
app.listen(port, () => console.log(`Server running on ${port}`))