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
const boom_1 = __importDefault(require("@hapi/boom"));
const db_1 = require("../database/db");
const client_entity_1 = require("../database/entities/client.entity");
const clientRepository = db_1.AppDataSource.getRepository(client_entity_1.Client);
const create = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = new client_entity_1.Client();
        client.firstName = payload.firstName;
        client.lastName = payload.lastName;
        client.birthday = payload.birthday;
        const clientSaved = yield clientRepository.save(client);
        return clientSaved;
    }
    catch (error) {
        throw boom_1.default.internal();
    }
});
const findAll = (params) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { limit, offset } = params;
        const clients = yield clientRepository.find({
            order: { createdAt: 'DESC' },
            take: limit,
            skip: (offset - 1) * limit,
        });
        return clients;
    }
    catch (error) {
        throw boom_1.default.internal();
    }
});
const averageAges = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const averageAges = yield clientRepository
            .createQueryBuilder()
            .select('AVG(AGE(clients.birthday))')
            .from(client_entity_1.Client, 'clients')
            .getRawOne();
        return averageAges;
    }
    catch (error) {
        throw boom_1.default.internal();
    }
});
module.exports = {
    create,
    findAll,
    averageAges,
};
