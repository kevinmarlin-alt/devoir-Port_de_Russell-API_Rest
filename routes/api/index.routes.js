const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth.middleware');

const authenticateRouter = require('./authenticate.routes');
const usersRouter = require('./users.routes');
const catwaysRouter = require('./catways.routes');
const reservationsRouter = require('./reservations.routes');

router.use('/', authenticateRouter)
router.use('/users', auth, usersRouter);
router.use('/catways', auth, catwaysRouter);
router.use('/catways', auth, reservationsRouter);

module.exports = router;