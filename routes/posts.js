const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req, res) => {
	res.send('we are on New (/posts) POSTS');
	// console.log(req.body);
});

router.post('/', (req, res) => {
	// console.log(req.body);
	const post = new Post({
		title: req.body.title,
		description: req.body.description,
		author: req.body.author,
	});
	post
		.save()
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.json({ message: err });
		});
});

module.exports = router;
