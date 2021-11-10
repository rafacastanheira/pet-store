import { Request, Response } from 'express'

import createMerchantService from '../services/CreateMerchantService'
import { ICreateMerchantDto } from '../dtos/ICreateMerchantDTO'

export default class MerchantsController{
    public async createMerchants(req: Request, res: Response): Promise<Response>{
        const merchant = await createMerchantService(req.body as ICreateMerchantDto)

<<<<<<< HEAD
        const { password, ...merchantWhitoutPass } = merchant;
=======
        const { password, ...merchantWhitoutPass } = merchant
>>>>>>> d88b3061e9c6dd1a23ab182d4675af9802dc9c22
        
        return res.status(200).json(merchantWhitoutPass);
    }
}
