import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import validator from 'mongoose-unique-validator';
const { Schema } = mongoose;

const userSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: { type: String, required: true, unique: true },
	username: {
		type: String,
		required: true,
		unique: true,
		maxlength: 30,
	},
	description: { type: String, required: false, maxlength: 200 },
	posts: { type: [String], required: false },
	avatar: { type: String, required: false },
	friends: { type: [String], required: false },
	isAdmin: { type: Boolean, default: 0 },
});

userSchema.plugin(validator, { message: 'already taken' });

userSchema.statics.hashPassword = (password: string) => {
	return bcrypt.hash(password, 12);
};

userSchema.statics.comparePassword = (
	password: string,
	requestPassword: string,
) => {
	return bcrypt.compare(password, requestPassword);
};

const User = mongoose.model('user', userSchema);

module.exports = User;
