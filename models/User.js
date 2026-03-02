const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - username
 *         - email
 *         - password
 *       properties:
 *         username:
 *           type: string
 *           description: Le nom d'utilisateur de l'utilisateur
 *         email:
 *           type: string
 *           description: L'adresse e-mail de l'utilisateur (doit être au format @russell-port.fr)
 *         password:
 *           type: string
 *           description: Le mot de passe de l'utilisateur (doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial)
 *       example:
 *         username: johndoe
 *         email: johndoe@russell-port.fr   
 *         password: P@ssw0rd!
 */
const userSchema = new Schema({
    username: { type: String, required: true, match: /^[\p{L}](?:[\p{L} '-]*[\p{L}])$/u },
    email: { type: String, required: true, unique: true, lowercase: true, match: /\b[A-Za-z0-9._%+-]+@russell-port\.fr\b/ },
    password: { type: String, required: true, minlength: 8, match: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/ }
}, { timestamps: true });

// Middleware pour hasher le mot de passe avant de sauvegarder l'utilisateur
userSchema.pre('save', function() {
    if (!this.isModified('password')) {
        return
    }
    this.password = bcrypt.hashSync(this.password, 10);
    
});

module.exports = mongoose.model('User', userSchema);