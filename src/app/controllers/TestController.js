const User = require('../models/User');

exports.index = async (req, res, next) => {
    console.log('You accessed Test controller');
    const test = await req.auth();

    console.log(test);

    res.send(test);
}
