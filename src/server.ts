import express, { Request, Response } from 'express';
import path from 'path';
require('dotenv').config();

const PORT = process.env.PORT || 7000;

const app = express();

app.use(express.json());

app.use(express.static('frontend/build'));

app.get('/api', (req: Request, res: Response) => {
	res.send({ msg: 'Hello Master972' });
});

app.get('/*', (req: Request, res: Response) => {
	res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

app.listen(7000, () => {
	console.log(`Server running on port ${PORT}`);
});
