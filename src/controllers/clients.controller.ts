import boom from '@hapi/boom';
import { NextFunction, Request, Response } from 'express';
import path from 'path';

const client = require(path.resolve(__dirname, '../services/clients.service'));

export const getClients = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const clients = await client.findAll(req.query);
    return res.status(200).json(clients);
  } catch (error) {
    next(error);
  }
};

export const createClient = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { firstName, lastName, birthday } = req.body;
    let data = await client.create({ firstName, lastName, birthday });
    return res.status(201).send(data);
  } catch (error) {
    next(error);
  }
};

export const getAverageAges = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    let data = await client.averageAges();
    return res.status(200).send(data);
  } catch (error) {
    next(error);
  }
};
