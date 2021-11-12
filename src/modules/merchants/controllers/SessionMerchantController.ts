import { Request, Response } from 'express';
import authenticateMerchantService from '../services/AuthenticateMerchantService';
import { IAuthenticaterMerchantDTO } from '../dtos/IAuthenticaterMerchantDTO';

export default class SessionController {
  public async create(req: Request, res: Response): Promise<Response> {
    const session = await authenticateMerchantService(
      req.body as IAuthenticaterMerchantDTO,
    );

    return res.status(200).json(session);
  }
}
