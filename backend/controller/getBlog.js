const Blog = require("../models/blogSchema")

const getblogs = async (req, res) => {
    const getblog = await Blog.find({})
    console.log(getblog)
    res.send(getblog)
}

module.exports = getblogs