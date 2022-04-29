"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./config/swagger');
const config_1 = __importDefault(require("./config"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)(config_1.default.server.LOGGER));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const router = require('./routes');
const { logErrors, errorHandler, boomErrorHandler, } = require('./middlewares/error.handler');
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.use('/api', router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
exports.default = app;
