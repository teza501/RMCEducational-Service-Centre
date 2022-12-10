const router = require('express').Router();
const Post =  require('../models/Post')


//Create Post
router.post("/",async(req,res)=>{
    const newPost = new Post(req.body)
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (error) {
        res.status(500).json(error)
    }
})


router.get("/",async(req,res)=>{
    let posts;
    posts = await Post.find()
       try{
        res.status(200).json(posts);
       }
    catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;