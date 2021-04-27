"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var usersCtrl = require('./users.controller');
var router = require('express').Router();
router.post('/signup', usersCtrl.signup);
router.post('/login');
module.exports = router;
