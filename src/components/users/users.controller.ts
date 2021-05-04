const { createUser } = require('../../database/queries/users.queries');
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

exports.signup = async (req: Request, res: Response) => {
	const bodyRequest = req.body;
	const email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	try {
		if (!email_regex.test(req.body.email)) {
			throw new Error('wrong mail format');
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
			throw new Error('Sorry,something gone wrong,please try again later');
		}

		res.status(201).json({
			id: newUser.id,
			email: newUser.email,
			username: newUser.username,
			description: newUser.description,
			token: token,
		});
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};
