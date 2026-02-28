const User = require('../models/user');

exports.getAll = (req, res) => {
  res.send('Get all users');
}

exports.getById = (req, res) => {
    const userId = req.params.id;
    res.send(`Get user with id ${userId}`);
}

exports.create = async (req, res) => {
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        username,
        email,
        password: hashedPassword
    });

    await newUser.save();

    res.status(201).json({ message: 'Nouvel utilisateur créé', user: newUser });
}

exports.update = (req, res) => {
  const userId = req.params.id;
  res.send(`Update user with id ${userId}`);
}

exports.delete = (req, res) => {
  const userId = req.params.id;
  res.send(`Delete user with id ${userId}`);
}