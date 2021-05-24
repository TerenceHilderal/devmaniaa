import { Request, Response } from 'express';
const { createPost } = require('../../database/queries/posts.queries');
const Post = require('../../database/models/post.model');

exports.sendingNewPost = async (req: any, res: Response) => {
	try {
		const newPost = await createPost(
			req.body.content,
			`${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`,
			req.user.username,
		);

		res.status(201).json({
			content: newPost.content,
			attachment: newPost.attachment,
			postedBy: newPost.postedBy,
		});
	} catch (error) {
		console.log(error);
	}
};
