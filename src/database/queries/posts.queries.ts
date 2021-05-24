const Post = require('../models/post.model');

exports.createPost = async (
	content: string,
	attachment: any,
	postedBy: string,
) => {
	try {
		const newPost = new Post({
			content,
			attachment,
			postedBy,
		});
		return newPost.save();
	} catch (error) {
		console.log(error);
	}
};
