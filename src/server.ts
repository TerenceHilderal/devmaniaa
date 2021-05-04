import express, { Request, Response } from 'express';
import path from 'path';
require('dotenv').config();
require('./database');
const usersRoutes = require('./components/users/users.routes.js');

const PORT = process.env.PORT || 7000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('frontend/build'));

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept',
	);
	next();
});

app.use('/api/users', usersRoutes);

app.get('/*', (req: Request, res: Response) => {
	res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

app.listen(7000, () => {
	console.log(`Server running on port ${PORT}`);
});
