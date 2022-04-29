"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    server: {
        PORT: process.env.PORT || 4000,
        LOGGER: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
        SWAGGER: process.env.SWAGGER || 'localhost:4000',
        SWAGGER_FULL: process.env.SWAGGER_FULL,
        SWAGGER_SCHEME: [`${process.env.SWAGGER_SCHEME}`],
    },
    database: {
        HOST: process.env.DB_HOST,
        USERNAME: process.env.DB_USERNAME,
        PASSWORD: process.env.DB_PASSWORD,
        PORT: Number(process.env.DB_PORT),
        DATABASE: process.env.DB_NAME,
    },
};
module.exports = config;
