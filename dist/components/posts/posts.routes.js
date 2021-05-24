"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var postsCtrl = require('./posts.controller');
var multer = require('multer');
var upload = multer({ dest: './uploads' });
var auth = require('../../database/middleware/auth');
var router = require('express').Router();
router.post('/post', auth, upload.single('attachment'), postsCtrl.sendingNewPost);
module.exports = router;
