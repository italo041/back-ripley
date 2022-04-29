import dotenv from 'dotenv';
dotenv.config();

const config = {
  server: {
    PORT: process.env.PORT || 3000,
  },
  database: {
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
  },
};

export = config;
