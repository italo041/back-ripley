import { DatabaseType, DataSource } from 'typeorm';

import config from '../config';
import { Client } from './entities/client.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: config.database.HOST,
  username: config.database.USERNAME,
  password: config.database.PASSWORD,
  port: config.database.PORT,
  database: config.database.DATABASE,
  entities: [Client],
  logging: false,
  synchronize: true,
});
