"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
const path = __importStar(require("path"));
const { server: { SWAGGER, SWAGGER_FULL, SWAGGER_SCHEME }, } = require(path.resolve(__dirname, './../index'));
const { clients } = require(path.resolve(__dirname, './endpoints'));
const { BadRequest, Clients } = require(path.resolve(__dirname, './definitions'));
const Schemas = require(path.resolve(__dirname, './../../dtos'));
const swagger = {
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
    paths: Object.assign({}, clients),
    definitions: Object.assign(Object.assign(Object.assign({}, BadRequest), Clients), Schemas),
};
module.exports = swagger;
