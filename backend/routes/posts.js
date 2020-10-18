const express = require('express');
const router = express.Router();
const Post = require('../models/Mochi');

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err })
  }
});

router.post('/', async (req, res) => {
  const post = new Post({
    name: req.body.name,
    weight: req.body.weight
  })
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err});
  }
});


module.exports = router;