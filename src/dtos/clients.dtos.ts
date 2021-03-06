import Joi from 'joi';
import j2s from 'joi-to-swagger';

const id = Joi.number().integer();
const firstName = Joi.string().trim().min(3).max(15).regex(/^[a-zA-Z]*$/).example('John');
const lastName = Joi.string().trim().min(3).max(15).regex(/^[a-zA-Z]*$/).example('Doe');
const birthday = Joi.date().min('1930-01-01').max(Date.now()).example('1998-10-10');
const limit = Joi.number().min(1);
const offset = Joi.number().min(1);

const createClientDto = Joi.object({
  firstName: firstName.required(),
  lastName: lastName.required(),
  birthday: birthday.required(),
});

const getClientDto = Joi.object({
  id: id.required(),
});

const filterClientDto = Joi.object({
  limit: limit.optional(),
  offset: offset.optional(),
}).and('limit', 'offset');

const CreateClientSchema = j2s(createClientDto).swagger

module.exports = { createClientDto, filterClientDto, getClientDto, CreateClientSchema };
