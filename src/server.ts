import 'reflect-metadata';
import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

import routers from './routes';
import AppError from '@shared/errors/AppError';

<<<<<<< HEAD
const app = express();
app.use(cors());
app.use(express.json());
app.use(routers);

=======
import './infra/database';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routers);

>>>>>>> 50960d65c8c6eb63cb67e236cac87047ccdad40e
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response
      .status(err.statusCode)
      .json({ status: 'error', message: err.message });
  }
  return response
    .status(500)
    .json({ status: 'error', message: 'Internal server error' });
});

app.listen(3333, () => {
  console.log('Server started on port 3333');
});
