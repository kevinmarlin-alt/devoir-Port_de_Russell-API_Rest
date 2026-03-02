const express = require('express');
const router = express.Router();

const reservationsController = require('../../controllers/reservations.controller');
const auth = require('../../middleware/auth.middleware');

/**
 * @swagger
 * /api/catways/{id}/reservations:
 *  get:
 *   summary: Récupère toutes les réservations pour un catway spécifique
 *   tags: [Reservations]
 *   parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: integer
 *       required: true
 *       description: Numéro du catway
 *   responses:
 *     200:
 *       description: Liste des réservations pour le catway spécifié
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/Reservation'
 *     404:
 *       description: Catway non trouvé ou aucune réservation pour ce catway
 *     500:
 *       description: Erreur lors de la récupération des réservations
 */
router.get('/:id/reservations', auth, reservationsController.getAllReservations)

/**
 * @swagger
 * /api/catways/{id}/reservations/{idReservation}:
 *  get:
 *   summary: Récupère une réservation spécifique pour un catway
 *   tags: [Reservations]
 *   parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: integer
 *       required: true
 *       description: Numéro du catway
 *     - in: path
 *       name: idReservation
 *       schema:
 *         type: string
 *       required: true
 *       description: ID de la réservation
 *   responses:
 *     200:
 *       description: Détails de la réservation spécifiée
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reservation'
 *     404:
 *       description: Catway ou réservation non trouvé
 *     500:
 *       description: Erreur lors de la récupération de la réservation
 */
router.get('/:id/reservations/:idReservation', auth, reservationsController.getByIdReservation)

/**
 * @swagger
 * /api/catways/{id}/reservations:
 *  post:
 *   summary: Crée une nouvelle réservation pour un catway spécifique
 *   tags: [Reservations]
 *   parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: integer
 *       required: true
 *       description: Numéro du catway
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           $ref: '#/components/schemas/Reservation'
 *   responses:
 *     201:
 *       description: Réservation créée avec succès
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reservation'
 *     404:
 *       description: Catway non trouvé
 *     500:
 *       description: Erreur lors de la création de la réservation
 */
router.post('/:id/reservations', auth, reservationsController.createReservation)

/**
 * @swagger
 * /api/catways/{id}/reservations/{idReservation}:
 *  put:
 *   summary: Met à jour une réservation spécifique pour un catway
 *   tags: [Reservations]
 *   parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: integer
 *       required: true
 *       description: Numéro du catway
 *     - in: path
 *       name: idReservation
 *       schema:
 *         type: string
 *       required: true
 *       description: ID de la réservation
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           $ref: '#/components/schemas/Reservation'
 *   responses:
 *     200:
 *       description: Réservation mise à jour avec succès
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reservation'
 *     404:
 *       description: Catway ou réservation non trouvé
 *     500:
 *       description: Erreur lors de la mise à jour de la réservation
 */
router.put('/:id/reservations/:idReservation', auth, reservationsController.updateReservation)

/**
 * @swagger
 * /api/catways/{id}/reservations/{idReservation}:
 *  delete:
 *   summary: Supprime une réservation spécifique pour un catway
 *   tags: [Reservations]
 *   parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: integer
 *       required: true
 *       description: Numéro du catway
 *     - in: path
 *       name: idReservation
 *       schema:
 *         type: string
 *       required: true
 *       description: ID de la réservation
 *   responses:
 *     200:
 *       description: Réservation supprimée avec succès
 *     404:
 *       description: Catway ou réservation non trouvé
 *     500:
 *       description: Erreur lors de la suppression de la réservation
 */
router.delete('/:id/reservations/:idReservation', auth, reservationsController.deleteReservation)


module.exports = router;