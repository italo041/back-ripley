import boom from '@hapi/boom';
import { NextFunction, Request, Response } from 'express';

type Properties = 'body' | 'params' | 'query';

function validatorHandler(schema: any, property: Properties) {
  return (req: Request, res: Response, next: NextFunction) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      return next(boom.badRequest(error));
    }
    return next();
  };
}

module.exports = validatorHandler;
