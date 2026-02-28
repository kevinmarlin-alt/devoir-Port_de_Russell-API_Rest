const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const jwtConfig = require('../jwt/jwt');

exports.login = async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: 'Mot de passe incorrect' });
    }

    const token = jwt.sign(
        { userId: user._id },
        jwtConfig.secret, 
        { expiresIn: jwtConfig.expiresIn });

    res.json({ message: 'Connexion réussie', token });
}

exports.logout = (req, res) => {
    res.send('Logout');
}