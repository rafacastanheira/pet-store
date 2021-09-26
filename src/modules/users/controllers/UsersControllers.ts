import { Request, Response } from 'express';

import createUserService from '../services/user/CreateUserService';
import { ICreateUserDto } from '../dtos/ICreateUserDTO';
export default class UsersController {
  public async createUsers(req: Request, res: Response): Promise<Response> {
    const user = await createUserService(req.body as ICreateUserDto);

    const { password, ...userWithouPass } = user;

    return res.status(200).json(userWithouPass);
  }
}
