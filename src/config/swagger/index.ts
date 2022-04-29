import * as path from 'path';
const {
  server: { SWAGGER, SWAGGER_FULL, SWAGGER_SCHEME },
} = require(path.resolve(__dirname, './../index'));

const { clients } = require(path.resolve(__dirname, './endpoints'));

const { BadRequest, Clients } = require(path.resolve(
  __dirname,
  './definitions',
));

const Schemas = require(path.resolve(__dirname, './../../dtos'));

const swagger: object = {
  swagger: '2.0',
  info: {
    version: '1.0.0',
    title: 'Test API',
    description: 'Api docs',
    termsOfService: SWAGGER_FULL,
    contact: {
      name: 'API Support',
      url: SWAGGER_FULL,
      email: 'test@example.com',
    },
  },
  host: SWAGGER,
  basePath: '/api',
  schemes: SWAGGER_SCHEME,
  consumes: ['application/json'],
  produces: ['application/json'],
  paths: { ...clients },
  definitions: {
    ...BadRequest,
    ...Clients,
    ...Schemas,
  },
};

export = swagger;
