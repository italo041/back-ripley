import dotenv from 'dotenv';
dotenv.config();

const config = {
  server: {
    PORT: process.env.PORT || 3000,
    LOGGER: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
    SWAGGER: `localhost:${process.env.PORT}` || 'localhost:3000',
    SWAGGER_FULL: `http://localhost:${process.env.PORT}`,
    SWAGGER_SCHEME: ['http'],
  },
  database: {
    HOST: process.env.DB_HOST,
    USERNAME: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD,
    PORT: Number(process.env.DB_PORT),
    DATABASE: process.env.DB_NAME,
  },
};

export = config;
