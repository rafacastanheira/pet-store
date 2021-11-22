import { Request, Response } from 'express'

import createMerchantService from '../services/CreateMerchantService'
import { ICreateMerchantDto } from '../dtos/ICreateMerchantDTO'
import prisma from '@services/prisma'

export default class MerchantsController{
    public async createMerchants(req: Request, res: Response): Promise<Response>{
        const merchant = await createMerchantService(req.body as ICreateMerchantDto)

        const { password, ...merchantWhitoutPass } = merchant;

        
        return res.status(200).json(merchantWhitoutPass);
    }

    public async getMerchant(req: Request, res: Response): Promise<Response>{
        const merchant = await prisma.merchants.findMany({})

        const merchantWhitoutPass = merchant.map(({password, ...rest}) => rest)

        return res.status(200).json(merchantWhitoutPass)
    }
}
