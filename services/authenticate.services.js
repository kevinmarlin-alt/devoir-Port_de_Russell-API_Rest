const User = require('../models/user');
const bcrypt = require('bcryptjs');

exports.login = async (email) => {
    return User.findOne({ email });
}

exports.comparePassword = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
}