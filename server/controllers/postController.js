const Post = require("../models/postModel");

exports.getAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.find(req.query);

    res.status(200).json({
      status: "success",
      results: allPosts.length,
      data: {
        allPosts,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: "could not fetch data",
    });
  }
};
