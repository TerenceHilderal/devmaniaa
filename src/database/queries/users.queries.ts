const User = require('../models/user.model');

exports.createUser = async (user: any) => {
	try {
		const password = await User.hashPassword(user.password);
		const newUser = new User({
			email: user.email,
			password: password,
			username: user.username,
			description: user.description,
			isAdmin: 0,
			friends: '',
		});
		return newUser.save();
	} catch (error) {
		console.log(error);
	}
};
