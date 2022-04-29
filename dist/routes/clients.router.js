"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = (0, express_1.default)();
const { createClient, getClients, getAverageAges, } = require('./../controllers/clients.controller');
const validatorHandler = require('./../middlewares/validator.handler');
const { createClientDto, filterClientDto } = require('./../dtos/clients.dtos');
router.get('/', validatorHandler(filterClientDto, 'query'), getClients);
router.post('/', validatorHandler(createClientDto, 'body'), createClient);
router.get('/average-ages', getAverageAges);
module.exports = router;
