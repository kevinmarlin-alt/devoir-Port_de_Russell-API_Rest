const express = require('express');
const router = express.Router();

const authenticateController = require('../../controllers/authenticate.controller');

/**
 * 
 * @swagger
 * /api/login:
 *   post:
 *     summary: Authentifier un utilisateur
 *     tags: [Authentication]
 *     security: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *        description: Authentification réussie
 *        content:
 *         application/json:
 *          schema:
 *          type: object
 *          properties:
 *              message:
 *               type: string
 *              token:
 *               type: string
 *       401:
 *        description: Mot de passe incorrect
 *       404:
 *        description: Utilisateur non trouvé
 *       500:
 *        description: Erreur lors de l'authentification
 * 
 */
router.post('/login', authenticateController.login)


/**
 * @swagger
 * /api/logout:
 *   get:
 *     summary: Déconnecter un utilisateur
 *     tags: [Authentication]
 *     responses:
 *      200:
 *       description: Déconnexion réussie
 * 
 */
router.get('/logout', authenticateController.logout)

module.exports = router;