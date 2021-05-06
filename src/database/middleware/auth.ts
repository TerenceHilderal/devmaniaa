import { Response, Request, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

module.exports = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const token = req?.headers?.authorization?.split(' ')[1];
		const decodedToken: any = jwt.verify(
			token as string,
			process.env['TOKEN_SECRET'],
		);
		const userId = decodedToken.id;
		if (req.body.userId && req.body.userId !== userId) {
			throw new Error('Invalid user ID');
		} else {
			next();
		}
	} catch (error) {
		res.status(403).json({ error: error.message });
	}
};
