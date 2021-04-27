import { Router } from 'express';
const usersCtrl = require('./users.controller');

const router: Router = require('express').Router();

router.post('/signup', usersCtrl.signup);
router.post('/login');

module.exports = router;
