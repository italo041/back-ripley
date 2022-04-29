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
      count: total,
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

const agesRange = async () => {
  try {
    const ageRanges = await clientRepository
      .query(
        `SELECT COUNT(case WHEN date_part('year' ,age(client.birthday)) between 0 and 20 then 1 END) as "0-20",
                COUNT(case WHEN date_part('year' ,age(client.birthday)) between 20 and 40 then 1 END) as "20-40",
                COUNT(case WHEN date_part('year' ,age(client.birthday)) between 40 and 60 then 1 END) as "40-60",
                COUNT(case WHEN date_part('year' ,age(client.birthday)) between 60 and 80 then 1 END) as "60-80",
                COUNT(case WHEN date_part('year' ,age(client.birthday)) between 80 and 100 then 1 END) as "80-100"
        FROM client`,
      );
    return ageRanges[0];
  } catch (error: any) {
    throw boom.internal(error.message);
  }
};

module.exports = {
  create,
  findAll,
  agesRange,
  averageAges,
};
