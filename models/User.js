const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

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