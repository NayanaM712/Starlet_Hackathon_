const Blog = require("../models/blogSchema")
const blogfunction = async (req, res) => {
    const { title, date, description } = req.body
    const blogDetails = await Blog.create({
        title,
        date,
        description
    })
    console.log("user data")
    res.json(blogDetails)
}
module.exports = blogfunction