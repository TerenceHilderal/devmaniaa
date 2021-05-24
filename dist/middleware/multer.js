"use strict";
var fs = require('fs');
var path = require('path');
var multer = require('multer');
var MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/gif': 'gif',
};
var storage = multer.diskStorage({
    destination: './uploads',
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    },
});
module.exports = multer({ storage: storage }).single('attachment');
