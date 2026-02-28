const express = require('express');
const router = express.Router();

const usersServices = require('../../services/users.services');
const auth = require('../../middleware/auth.middleware');

router.get('/', auth, usersServices.getAll)
router.get('/:id', auth, usersServices.getById)
router.post('/', auth, usersServices.create)
router.put('/:id', auth, usersServices.update)
router.delete('/:id', auth, usersServices.delete)

module.exports = router;