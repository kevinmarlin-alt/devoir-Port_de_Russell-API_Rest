const jwt = require('jsonwebtoken');

const jwtConfig = require('../jwt/jwt');

const authenticateServices = require('../services/authenticate.services');

exports.login = async (req, res) => {
    try {

        const user = await authenticateServices.login(req.body.email);
        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }
    
        const isPasswordValid = await authenticateServices.comparePassword(req.body.password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Mot de passe incorrect' });
        }
    
        const token = jwt.sign(
            { userId: user._id },
            jwtConfig.secret, 
            { expiresIn: jwtConfig.expiresIn });
    
        res.status(200).json({ message: 'Connexion réussie', token });
        
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de l\'authentification', error });
    }
}


exports.logout = (req, res) => {
    res.status(200).json({ message: 'Déconnexion réussie' });
}