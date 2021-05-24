import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema(
	{
		content: { type: String, maxlength: 200, required: true },
		attachment: { type: String, required: false },
		likes: { type: Number, required: false, default: 0 },
		dislikes: { type: Number, required: false, default: 0 },
		postedBy: {
			type: String,
		},
		comments: [
			{
				postedBy: {
					type: String,
				},
				content: String,
				likes: Number,
				disklikes: Number,
			},
			{ timestamps: true },
		],
	},
	{ timestamps: true },
);

const Post = mongoose.model('post', postSchema);

module.exports = Post;
