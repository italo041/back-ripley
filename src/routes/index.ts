import express, { Router } from 'express';

const router: Router = express();

const clientsRouter = require('./clients.router');

router.use('/clients', clientsRouter);

module.exports = router;
