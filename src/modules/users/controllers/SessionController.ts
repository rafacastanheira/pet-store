import { Request, Response } from 'express';
import authenticateUserService from '../services/user/AuthenticateUserService';
import { IAuthenticaterUserDTO } from '../dtos/IAuthenticaterUserDTO';

export default class SessionController {
  public async create(req: Request, res: Response): Promise<Response> {
    const session = await authenticateUserService(
      req.body as IAuthenticaterUserDTO,
    );

    return res.status(200).json(session);
  }
}
