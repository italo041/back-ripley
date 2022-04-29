import 'reflect-metadata';
import { server } from './config';
import app from './app';
import { AppDataSource } from './database/db';

async function main() {
  try {
    AppDataSource.initialize();
    app.listen(server.PORT, () => {
      console.log(
        `⚡️[server]: Server is running at http://localhost:${server.PORT}`,
      );
    });
  } catch (error) {
    console.log(error);
  }
}

main();
