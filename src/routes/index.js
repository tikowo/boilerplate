const express = require('express');

const auth            = require('./auth');
const AuthMiddleware  = require('../app/middleware/AuthMiddleware');
const ErrorMiddleware = require('../app/middleware/ErrorMiddleware');

const { TestController } = require('../app/controllers');

const router = express.Router();

router.use(auth);

router.get('/test', AuthMiddleware, TestController.index);

router.use(ErrorMiddleware)

module.exports = router;
