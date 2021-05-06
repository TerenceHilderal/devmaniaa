"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var usersCtrl = require('./users.controller');
var auth = require('../../database/middleware/auth');
var router = require('express').Router();
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);
module.exports = router;
