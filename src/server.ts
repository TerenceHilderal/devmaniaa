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

app.use('/api', usersRoutes);

app.get('/*', (req: Request, res: Response) => {
	res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

app.listen(7000, () => {
	console.log(`Server running on port ${PORT}`);
});
