const User = require('../models/user');
const bcrypt = require('bcryptjs');

exports.createUser = (data) => {
    const { username, email, password } = data;

    const hashedPassword = bcrypt.hashSync(password, 10);

    const user = new User({
        username,
        email,
        password: hashedPassword
    });

    return user.save();
}

exports.getUserByEmail = (email) => {
    return User.findOne({ email });
}

exports.getAllUsers = () => {
    return User.find();
}

exports.updateUser = (email, data) => {
    if('createdAt' in data) {
        delete data.createdAt;
    }
    return User.findOneAndUpdate({ email }, data, { new: true });
}

exports.deleteUser = (email) => {
    return User.findOneAndDelete({ email });
}