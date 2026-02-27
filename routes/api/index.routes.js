const express = require('express');
const router = express.Router();

const authenticateRouter = require('./authenticate.routes');
const usersRouter = require('./users.routes');
const catwaysRouter = require('./catways.routes');
const reservationsRouter = require('./reservations.routes');

router.use('/', authenticateRouter)
router.use('/users', usersRouter);
router.use('/catways', catwaysRouter);
router.use('/catways', reservationsRouter);


module.exports = router;