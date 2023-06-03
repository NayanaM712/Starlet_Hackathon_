const express = require("express")
const schemafunction = require("../controller/addevent")
const getevents = require("../controller/getEvent")
const blogfunction = require("../controller/addBlog")
const getblogs = require("../controller/getBlog")

const router = express.Router()

router.route("/eventgen").post(schemafunction)
router.route('/getEvents').get(getevents)
router.route("/bloggen").post(blogfunction)
router.route('/getBlog').get(getblogs)
module.exports=router