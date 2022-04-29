"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAverageAges = exports.createClient = exports.getClients = void 0;
const path_1 = __importDefault(require("path"));
const client = require(path_1.default.resolve(__dirname, '../services/clients.service'));
const getClients = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clients = yield client.findAll(req.query);
        return res.status(200).json(clients);
    }
    catch (error) {
        next(error);
    }
});
exports.getClients = getClients;
const createClient = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, birthday } = req.body;
        let data = yield client.create({ firstName, lastName, birthday });
        return res.status(201).send(data);
    }
    catch (error) {
        next(error);
    }
});
exports.createClient = createClient;
const getAverageAges = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield client.averageAges();
        return res.status(200).send(data);
    }
    catch (error) {
        next(error);
    }
});
exports.getAverageAges = getAverageAges;
