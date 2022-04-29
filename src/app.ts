import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./../src/config/swagger');

import config from './config';

const app: Express = express();

app.use(morgan(config.server.LOGGER));
app.use(cors());
app.use(express.json());

const router = require('./routes');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use('/api', router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

export default app;
