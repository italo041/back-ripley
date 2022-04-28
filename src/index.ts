import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

import { server } from './config';

dotenv.config();

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(server.PORT, () => {
  console.log(
    `⚡️[server]: Server is running at https://localhost:${server.PORT}`,
  );
});
