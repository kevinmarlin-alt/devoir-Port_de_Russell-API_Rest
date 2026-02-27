const express = require('express');
const router = express.Router();

const reservationsServices = require('../../services/reservations.services');

router.get('/:id/reservations', reservationsServices.getAll)
router.get('/:id/reservations/:idReservation', reservationsServices.getById)
router.post('/:id/reservations', reservationsServices.create)
router.put('/:id/reservations/:idReservation', reservationsServices.update)
router.delete('/:id/reservations/:idReservation', reservationsServices.delete)

module.exports = router;