import { NextFunction, Request, Response } from 'express';

function logErrors(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.error(err);
  next(err);
}

function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  return res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

function boomErrorHandler(
  err: { isBoom?: any; output?: any },
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (err.isBoom) {
    const { output } = err;
    return res.status(output.statusCode).json(output.payload);
  }
  next(err);
}

module.exports = { logErrors, errorHandler, boomErrorHandler };
