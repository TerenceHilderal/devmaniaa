import express, { Request, Response } from 'express';
import path from 'path';
require('dotenv').config();
require('./database');
const usersRoutes = require('./components/users/users.routes.js');
const postsRoutes = require('./components/posts/posts.routes');

const PORT = process.env.PORT || 7000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static('frontend/build'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*'); //l'origine qui a le droit d'accéder à notre api = tout le monde
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-with, Content, Accept, Content-Type, Authorization,*',
	); //on autorise certains headers
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, PATCH, OPTIONS',
	); // on autorise certaines méthod
	next();
});
app.get('*', (req: Request, res: Response) => {
	res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});
app.use('/api/users/', usersRoutes);
app.use('/api/posts/', postsRoutes);

app.listen(7000, () => {
	console.log(`Server running on port ${PORT}`);
});
