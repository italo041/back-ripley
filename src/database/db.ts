import { DatabaseType, DataSource } from 'typeorm';

import config from '../config';
import { Client } from './entities/client.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: config.database.host,
  username: config.database.username,
  password: config.database.password,
  port: config.database.port,
  database: config.database.database,
  entities: [Client],
  logging: false,
  synchronize: true,
});
