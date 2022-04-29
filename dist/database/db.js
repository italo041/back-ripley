"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const config_1 = __importDefault(require("../config"));
const client_entity_1 = require("./entities/client.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: config_1.default.database.HOST,
    username: config_1.default.database.USERNAME,
    password: config_1.default.database.PASSWORD,
    port: config_1.default.database.PORT,
    database: config_1.default.database.DATABASE,
    entities: [client_entity_1.Client],
    logging: false,
    synchronize: true,
});
