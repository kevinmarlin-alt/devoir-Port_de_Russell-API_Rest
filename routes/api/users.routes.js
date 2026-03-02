const express = require('express');
const router = express.Router();

const usersController = require('../../controllers/users.controller');
const auth = require('../../middleware/auth.middleware');


/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Récupérer tous les utilisateurs
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Liste des utilisateurs récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *              type: array
 *              items:
 *                 $ref: '#/components/schemas/User'
 *       404:
 *         description: Aucun utilisateur trouvé
 *       500:
 *         description: Erreur lors de la récupération des utilisateurs
 */
router.get('/', auth, usersController.getAllUsers)

/**
 * @swagger
 * /api/users/{email}:
 *   get:
 *     summary: Récupérer un utilisateur par son email
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *           format: email
 *     responses:
 *           200:
 *             description: Utilisateur récupéré avec succès
 *             content:
 *               application/json:
 *                 schema:
 *                   $ref: '#/components/schemas/User'
 *           404:
 *             description: Utilisateur non trouvé
 *           500:
 *             description: Erreur lors de la récupération de l'utilisateur
 */
router.get('/:email', auth, usersController.getUserByEmail)

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Créer un nouvel utilisateur
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Utilisateur créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Erreur lors de la création de l'utilisateur
 */
router.post('/', auth, usersController.createUser)

/**
 * @swagger
 * /api/users/{email}:
 *   put:
 *     summary: Mettre à jour un utilisateur existant
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *           format: email
 *     responses:
 *       200:
 *         description: Utilisateur mis à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Utilisateur non trouvé
 *       500:
 *         description: Erreur lors de la mise à jour de l'utilisateur
 */
router.put('/:email', auth, usersController.updateUser)

/**
 * @swagger
 * /api/users/{email}:
 *  delete:
 *    summary: Supprimer un utilisateur
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: email
 *        required: true
 *        schema:
 *           type: string
 *           format: email
 *    responses:
 *      204:
 *       description: Utilisateur supprimé avec succès
 *      404:
 *       description: Utilisateur non trouvé
 *      500:
 *       description: Erreur lors de la suppression de l'utilisateur
 */
router.delete('/:email', auth, usersController.deleteUser)

module.exports = router;