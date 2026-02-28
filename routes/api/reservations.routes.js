const express = require('express');
const router = express.Router();

const reservationsServices = require('../../services/reservations.services');
const auth = require('../../middleware/auth.middleware');

router.get('/:id/reservations', auth, reservationsServices.getAll)
router.get('/:id/reservations/:idReservation', auth, reservationsServices.getById)
router.post('/:id/reservations', auth, reservationsServices.create)
router.put('/:id/reservations/:idReservation', auth, reservationsServices.update)
router.delete('/:id/reservations/:idReservation', auth, reservationsServices.delete)

module.exports = router;