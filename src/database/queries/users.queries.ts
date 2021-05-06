const User = require('../models/user.model');

exports.createUser = async (user: any) => {
	try {
		const password = await User.hashPassword(user.password);
		const newUser = new User({
			id: user.id,
			email: user.email,
			password: password,
			username: user.username,
			description: user.description,
			isAdmin: 0,
			friends: '',
		});
		return newUser.save();
	} catch (error) {
		throw new Error(error);
	}
};

exports.checkUserExistence = async (email: string) => {
	try {
		const existingUser = User.findOne({ email: email });
		if (!existingUser || null) {
			throw new Error('Sorry this user do not exist');
		} else {
			return existingUser;
		}
	} catch (error) {
		throw new Error(error);
	}
};

exports.checkPassword = async (password: string, requestPassword: string) => {
	try {
		const matchingPassword = await User.comparePassword(
			password,
			requestPassword,
		);
		return matchingPassword;
	} catch (error) {}
};
