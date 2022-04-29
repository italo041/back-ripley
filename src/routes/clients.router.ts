import express, { Router } from 'express';
const router: Router = express();

const {
  createClient,
  getClients,
  getAverageAges,
} = require('./../controllers/clients.controller');

const validatorHandler = require('./../middlewares/validator.handler');

const { createClientDto, filterClientDto } = require('./../dtos/clients.dtos');

router.get('/', validatorHandler(filterClientDto, 'query'), getClients);
router.post('/', validatorHandler(createClientDto, 'body'), createClient);
router.get('/average-ages', getAverageAges);

module.exports = router;
