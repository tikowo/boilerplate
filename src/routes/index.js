const express = require('express');

const auth           = require('./auth');
const TestController = require('../app/controllers/TestController');
const AuthMiddleware = require('../app/middleware/AuthMiddleware');

const router = express.Router();

router.use(auth);

router.get('/test', AuthMiddleware, TestController.index);

module.exports = router;
