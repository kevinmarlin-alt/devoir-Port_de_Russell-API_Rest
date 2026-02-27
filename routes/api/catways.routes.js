const express = require('express');
const router = express.Router();

const catwaysServices = require('../../services/catways.services');

router.get('/', catwaysServices.getAll)
router.get('/:id', catwaysServices.getById)
router.post('/', catwaysServices.create)
router.put('/:id', catwaysServices.update)
router.delete('/:id', catwaysServices.delete)

module.exports = router;