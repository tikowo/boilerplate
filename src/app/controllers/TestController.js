const User = require('../models/User');

exports.index = async (req, res, next) => {
    console.log('You accessed Test controller');
    res.send(req.auth);
}
