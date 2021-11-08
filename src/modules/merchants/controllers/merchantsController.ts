import { Request, Response } from 'express'

import createMerchantService from '../services/CreateMerchantService'
import { ICreateMerchantDto } from '../dtos/ICreateMerchantDTO'

export default class MerchantsController{
    public async createMerchants(req: Request, res: Response): Promise<Response>{
        const merchant = await createMerchantService(req.body as ICreateMerchantDto)

        const { password, ...merchantWhitoutPass } = merchant
        
        return res.status(200).json(merchantWhitoutPass);
    }
}
