import { Router } from 'express';

import usersRouter from '@modules/users/routes/users.router';
import merchantRouter from '@modules/merchants/routes/merchant.router';

const routers = Router();

routers.use('/users', usersRouter);
routers.use('/merchants', merchantRouter)

export default routers;
