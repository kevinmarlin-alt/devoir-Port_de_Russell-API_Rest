const jwt = require('jsonwebtoken');
const jwtConfig = require('../jwt/jwt');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Token de connexion manquant ou mal formaté' });
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, jwtConfig.secret);
        req.userId = decoded.userId;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Token de connexion invalide' });
    }
}