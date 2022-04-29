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
    const { limit = 100, offset = 1 } = params;
    
    const [clients, total] = await clientRepository.findAndCount({
      order: { createdAt: 'DESC' },
      take: limit,
      skip: (offset - 1) * limit,
    });

    return {
      data: clients,
      count: total
  };
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
