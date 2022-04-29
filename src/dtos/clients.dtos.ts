import Joi from 'joi';

const id = Joi.number().integer();
const firstName = Joi.string().min(3).max(15);
const lastName = Joi.string().min(3).max(15);
const birthday = Joi.date();
const limit = Joi.number();
const offset = Joi.number();

const createClientDto = Joi.object({
  firstName: firstName.required(),
  lastName: lastName.required(),
  birthday: birthday.required(),
});

const getClientDto = Joi.object({
  id: id.required(),
});

const filterClientDto = Joi.object({
  limit: limit.min(1).optional(),
  offset: offset.min(1).optional(),
});

module.exports = { createClientDto, filterClientDto, getClientDto };
