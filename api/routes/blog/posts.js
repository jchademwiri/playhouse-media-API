const express = require('express');


const Post = require('../../../models/blog/Post');
const router = express.Router();



// GET ALL POSTS
router.get('/', async (req, res) => {
	try {
		const posts = await Post.find({}).sort({
			date: -1,
		});
		res.json(posts);
		// console.log(posts);
	} catch (err) {
		res.json({ message: err });
	}
});

// SUBMIT A POST
router.post('/', async (req, res) => {
	const post = new Post({
		title: req.body.title,
		description: req.body.description,
		author: req.body.author,
	});
	try {
		const savedPost = await post.save();
		res.json(savedPost);
	} catch (err) {
		res.json({ message: err });
	}
});
// GET SINGLE POST

router.get('/:postId', async (req, res) => {
	try {
		const post = await Post.findById(req.params.postId);
		res.json(post);
	} catch (err) {
		res.json({ message: err });
	}
});

// DELETE A POST

router.delete('/:postId', async (req, res) => {
	try {
		const removedPost = await Post.remove({ _id: req.params.postId });
		res.json(removedPost);
	} catch (err) {
		res.json({ message: err });
	}
});

// UPDATE A POST

router.patch('/:postId', async (req, res) => {
	try {
		const updatedPost = await Post.updateOne(
			{ _id: req.params.postId },
			{ $set: { title: req.body.title } }
		);
		res.json(updatedPost);
	} catch (err) {
		res.json({ message: err });
	}
});

module.exports = router;
