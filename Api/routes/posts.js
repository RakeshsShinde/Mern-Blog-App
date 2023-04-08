const router = require('express').Router();

const Post = require('../models/Post')


//create new post 
router.post('/', async (req, res) => {
    const newpost = new Post(req.body);
    try {
        const savepost = await newpost.save();
        res.status(200).json(savepost);
    } catch (error) {
        res.status(500).json(error);
    }
})


//update the post 
router.put("/:id", async (req, res) => {
    try {

        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                const updatedpost = await Post.findByIdAndUpdate(req.params.id,
                    {
                        $set: req.body
                    }, { new: true }
                )
                res.status(200).json(updatedpost);
            } catch (error) {
                res.status()
            }
        }
        else {
            res.status(401).json("you can only update your post !")
        }
    } catch (err) {
        res.status(500).json(err);
    }
})

// delete the post
router.delete("/:id", async (req, res) => {
    try {

        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                await post.delete();
                res.status(200).json("post has been deleted !");
            } catch (error) {
                res.status()
            }
        }
        else {
            res.status(401).json("you can only delete your post !")
        }
    } catch (err) {
        res.status(500).json(err);
    }
})



//get the post by id  
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error)
    }
})

//get all posts and filter the posts
router.get("/", async (req, res) => {
    const username = req.query.username;
    const catName = req.query.cat;
    const searchQuery = req.query.search;
    try {
        let posts;
        if (username) {
            posts = await Post.find({ username })
        }

        else if (catName) {
            posts = await Post.find({ category: catName })
        }
        else if (searchQuery) {
            const regex = new RegExp(searchQuery, "i");
            posts = await Post.find({ $or: [{ title: regex }, { desc: regex }] })
        }
        else {
            posts = await Post.find();
        }

        res.status(200).json(posts);
    } catch (error) {

    }

})

module.exports = router;