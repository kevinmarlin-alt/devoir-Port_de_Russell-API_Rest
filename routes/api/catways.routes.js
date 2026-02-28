const express = require('express');
const router = express.Router();

const catwaysServices = require('../../services/catways.services');
const auth = require('../../middleware/auth.middleware');

router.get('/', auth, catwaysServices.getAll)
router.get('/:id', auth, catwaysServices.getById)
router.post('/', auth, catwaysServices.create)
router.put('/:id', auth, catwaysServices.update)
router.delete('/:id', auth, catwaysServices.delete)

module.exports = router;