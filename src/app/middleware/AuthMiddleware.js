const jwt = require("jsonwebtoken");
const { jwtSecret } = require('../../config/vars');

const User = require('../models/User');


const verifyToken = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"];

    if(!token) {
        return res.status(403).json({
            error: 'A token is required for authentication'
        });
    }
    try {
        req.user = jwt.verify(token, jwtSecret);
        req.auth = User.query().where('id', req.user.id).throwIfNotFound();
    } catch(e) {
        return res.status(401).json({
            error: 'Invalid token'
        });
    }

    return next();
};

module.exports = verifyToken;
