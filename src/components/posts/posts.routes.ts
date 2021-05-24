import { Router } from 'express';
const postsCtrl = require('./posts.controller');
const multer = require('multer');
const upload = multer({ dest: './uploads' });
const auth = require('../../database/middleware/auth');
const router: Router = require('express').Router();

router.post(
	'/post',
	auth,
	upload.single('attachment'),
	postsCtrl.sendingNewPost,
);

module.exports = router;
