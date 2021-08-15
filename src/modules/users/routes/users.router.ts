import { Router } from 'express'
import UsersController from '../controllers/UsersControllers'

const userRouter = Router()
const usersController = new UsersController();

userRouter.post('/', usersController.createUsers);

export default userRouter


