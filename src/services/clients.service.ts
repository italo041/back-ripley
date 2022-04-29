import boom from '@hapi/boom';
import { AppDataSource } from '../database/db';

import { Client } from '../database/entities/client.entity';

import { Client as ClientInterface } from './../models/client.model';

const clientRepository = AppDataSource.getRepository(Client);

const create = async (payload: ClientInterface) => {
  try {
    const client = new Client();

    client.firstName = payload.firstName;
    client.lastName = payload.lastName;
    client.birthday = payload.birthday;

    const clientSaved = await clientRepository.save(client);
    return clientSaved;
  } catch (error) {
    throw boom.internal();
  }
};

const findAll = async (params: any) => {
  try {
    const { limit, offset } = params;
    
    const clients = await clientRepository.find({
      order: { createdAt: 'DESC' },
      take: (limit && offset) & limit,
      skip: (limit && offset) & (offset - 1) * limit,
    });

    return clients;
  } catch (error: any) {
    throw boom.internal(error.message);
  }
};

const averageAges = async () => {
  try {
    const averageAges = await clientRepository
      .createQueryBuilder()
      .select('AVG(AGE(clients.birthday))')
      .from(Client, 'clients')
      .getRawOne();
    return averageAges;
  } catch (error) {
    throw boom.internal();
  }
};

module.exports = {
  create,
  findAll,
  averageAges,
};
