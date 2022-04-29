"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const id = joi_1.default.number().integer();
const firstName = joi_1.default.string().min(3).max(15).example('John');
const lastName = joi_1.default.string().min(3).max(15).example('Doe');
const birthday = joi_1.default.date().example('1998-10-10');
const limit = joi_1.default.number().min(1);
const offset = joi_1.default.number().min(1);
const createClientDto = joi_1.default.object({
    firstName: firstName.required(),
    lastName: lastName.required(),
    birthday: birthday.required(),
});
const getClientDto = joi_1.default.object({
    id: id.required(),
});
const filterClientDto = joi_1.default.object({
    limit: limit.optional(),
    offset: offset.optional(),
});
const CreateClientSchema = (0, joi_to_swagger_1.default)(createClientDto).swagger;
module.exports = { createClientDto, filterClientDto, getClientDto, CreateClientSchema };
