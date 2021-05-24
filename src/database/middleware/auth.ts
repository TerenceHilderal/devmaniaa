import { Response, Request, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
const user = require('../models/user.model');

module.exports = async (req: any, res: Response, next: NextFunction) => {
	try {
		const token = req?.headers?.authorization?.split(' ')[1];
		const decodedToken: any = jwt.verify(
			token as string,
			process.env['TOKEN_SECRET'],
		);
		const userId = decodedToken.id;
		const userFound = await user.findOne({ _id: userId });

		if (!user) {
			throw new Error('Invalid user ID');
		} else {
			req.user = userFound;
			next();
		}
	} catch (error) {
		res.status(403).json({ error: error.message });
	}
};
