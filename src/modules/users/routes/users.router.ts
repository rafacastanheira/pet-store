import { Router } from 'express';
import UsersController from '../controllers/UsersControllers';
import SessionController from '../controllers/SessionController';

const userRouter = Router();
const usersController = new UsersController();
const sessionsController = new SessionController();

userRouter.post('/', usersController.createUsers);
userRouter.post('/session', sessionsController.create);

export default userRouter;
