const express = require('express');
const router = express.Router();

const usersServices = require('../../services/users.services');

router.get('/', usersServices.getAll)
router.get('/:id', usersServices.getById)
router.post('/', usersServices.create)
router.put('/:id', usersServices.update)
router.delete('/:id', usersServices.delete)

module.exports = router;