const fs = require('fs');
const path = require('path');
const multer = require('multer');

const MIME_TYPES: any = {
	'image/jpg': 'jpg',
	'image/jpeg': 'jpg',
	'image/png': 'png',
	'image/gif': 'gif',
};

const storage = multer.diskStorage({
	destination: './uploads',
	filename: (req: any, file: any, cb: any) => {
		cb(null, Date.now() + '-' + file.originalname);
	},
});

module.exports = multer({ storage: storage }).single('attachment');
