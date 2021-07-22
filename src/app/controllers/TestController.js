const User = require('../models/User');

exports.index = async (req, res, next) => {
    const user = await User.query().findById(1).where('name', 'Magnus_Braun44');

    console.log('You accessed Test controller');

    res.send(user);
}
