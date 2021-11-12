import { Request, Response } from 'express';
import createProductService from '../services/CreateProductService';
import { ICreateProductDTO } from '../dtos/ICreateProductDTO';

export default class ProductsController {
    public async createProducts(req: Request, res: Response) {
        try {
            const merchantId = req.merchant.id

            const product = await createProductService(req.body as ICreateProductDTO, merchantId)
            return res.status(200).json(product)
        } catch (e) {
            console.log(e)
        }
    }
}
