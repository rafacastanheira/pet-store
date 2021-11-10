import { Request, Response } from 'express';
import createProductService from '../services/CreateProductService';
import { ICreateProductDTO } from '../dtos/ICreateProductDTO';

export default class ProductsController {
    public async createProducts(req: Request, res: Response) {
        const { merchantId } = req.params
        console.log('merchantId => ', merchantId)

        const product = await createProductService(req.body as ICreateProductDTO, merchantId)
        return res.status(200).json(product)
    }
}
