const express = require('express');
const router = express.Router();

const catwaysController = require('../../controllers/catways.controller');
const auth = require('../../middleware/auth.middleware');

/**
 * @swagger
 * /api/catways:
 *   get:
 *     summary: Récupérer tous les catways
 *     tags: [Catways]
 *     responses:
 *       200:
 *         description: Liste des catways récupérée avec succès
 *         content:
 *           application/json:
 *            schema:
 *             type: array
 *             items:
 *                 $ref: '#/components/schemas/Catway'
 *       404:
 *        description: Aucun catway trouvé
 *       500:
 *        description: Erreur lors de la récupération des catways
 */
router.get('/', auth, catwaysController.getAllCatways)

/**
 * @swagger
 * /api/catways/{id}:
 *   get:
 *     summary: Récupérer un catway par son numéro
 *     tags: [Catways]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *     responses:
 *      200:
 *       description: Catway récupéré avec succès
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Catway'
 *      404:
 *       description: Catway non trouvé
 *      500:
 *       description: Erreur lors de la récupération du catway
 */
router.get('/:id', auth, catwaysController.getById)

/**
 * @swagger
 * /api/catways:
 *   post:
 *     summary: Créer un nouveau catway
 *     tags: [Catways]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Catway'
 *     responses:
 *       201:
 *         description: Catway créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Catway'
 *       500:
 *         description: Erreur lors de la création du catway
 */
router.post('/', auth, catwaysController.createCatway)

/**
 * @swagger
 * /api/catways/{id}:
 *   put:
 *     summary: Mettre à jour un catway existant
 *     tags: [Catways]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *     responses:
 *       200:
 *         description: Catway mis à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Catway'
 *       404:
 *         description: Catway non trouvé
 *       500:
 *         description: Erreur lors de la mise à jour du catway
 */
router.put('/:id', auth, catwaysController.updateCatway)


/**
* @swagger
* /api/catways/{id}:
*  delete:
*    summary: Supprimer un catway
*    tags: [Catways]
*    parameters:
*      - in: path
*        name: id
*        required: true
*        schema:
*           type: integer
*           format: int64
*    responses:
*      204:
*       description: Catway supprimé avec succès
*      404:
*       description: Catway non trouvé
*      500:
*       description: Erreur lors de la suppression du catway
*/
router.delete('/:id', auth, catwaysController.deleteCatway)

module.exports = router;