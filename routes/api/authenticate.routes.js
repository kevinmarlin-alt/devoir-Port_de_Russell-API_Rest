const express = require('express');
const router = express.Router();

const authenticateServices = require('../../services/authenticate.services');

router.post('/login', authenticateServices.login)
router.get('/logout', authenticateServices.logout)

module.exports = router;