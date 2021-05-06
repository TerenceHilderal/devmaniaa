import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const {
	createUser,
	checkUserExistence,
	checkPassword,
} = require('../../database/queries/users.queries');

exports.signup = async (req: Request, res: Response) => {
	const bodyRequest = req.body;
	const email: string = req.body.email;
	const password: string = req.body.password;
	const email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const password_regex = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;

	try {
		if (!email_regex.test(email)) {
			throw new Error('Wrong mail format');
		}
		if (!password_regex.test(password) || email === null || undefined) {
			throw new Error('Wrong password format');
		}

		const newUser = await createUser(bodyRequest);
		if (!newUser) {
			throw new Error('Sorry,something gone wrong,please try again later');
		}

		const token =
			'Bearer ' +
			jwt.sign({ id: newUser.id }, process.env['TOKEN_SECRET'], {
				expiresIn: '3600s',
			});

		if (!token) {
			throw new Error('Incorrect token');
		}

		res.status(201).json({
			id: newUser.id,
			email: newUser.email,
			username: newUser.username,
			description: newUser.description,
			token: token,
			message: 'Your account has been successufully created',
		});
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

exports.login = async (req: Request, res: Response) => {
	try {
		const existingUser = await checkUserExistence(req.body.email);
		if (!existingUser || null) {
			throw new Error("Sorry can't find your account");
		}

		const matchingPassword = await checkPassword(
			req.body.password,
			existingUser.password,
		);

		if (!matchingPassword || null) {
			throw new Error('Sorry try again');
		}
		const token =
			'Bearer ' +
			jwt.sign({ id: existingUser.id }, process.env['TOKEN_SECRET'], {
				expiresIn: '3600s',
			});

		if (!token) {
			throw new Error('Incorrect token');
		}

		if (existingUser && matchingPassword) {
			res.status(200).json({ user: existingUser, token: token });
		} else {
			throw new Error('Sorry something gone wrong try again later');
		}
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};
