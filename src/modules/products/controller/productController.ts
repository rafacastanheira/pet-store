import { Request, Response } from 'express';
import createProductService from '../services/CreateProductService';
import { ICreateProductDTO } from '../dtos/ICreateProductDTO';
import prisma from '@services/prisma'
export default class ProductsController {
    public async createProducts(req: Request, res: Response) {
        const merchantId = req.merchant.id

        const imageUrl = req.file?.path

        const product = await createProductService(req.body as ICreateProductDTO, merchantId, imageUrl)
        return res.status(200).json(product)
    }
    
    public async getProducts(req: Request, res: Response) {
        const products = await prisma.product.findMany({})
        
        return res.status(200).json(products)
    }
}
