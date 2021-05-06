import { Router } from 'express';
const usersCtrl = require('./users.controller');
const auth = require('../../database/middleware/auth');
const router: Router = require('express').Router();

router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);

module.exports = router;
