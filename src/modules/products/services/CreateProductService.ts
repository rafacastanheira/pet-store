import prisma from '@services/prisma'
import AppError from '@shared/errors/AppError'
import { ICreateProductDTO } from '../dtos/ICreateProductDTO'
import fs from 'fs'

const createProductService = async (
    dto: ICreateProductDTO,
    merchantId: string,
    imageUrl: string | undefined
) => {
    const {  name, price, categoryId } = dto
    const checkProductExist = await prisma.product.findFirst({
        where: {
            AND: [
                {name}, {category_id: categoryId}, {merchant_id: merchantId}
            ]
        }
    })

    if (checkProductExist) {
        await fs.promises.unlink(String(imageUrl))
        throw new AppError('Product already exist.')
    }

    

    const product = await prisma.product.create({
        data: {
            name: name.toLocaleLowerCase(),
            imageUrl: String(imageUrl).toLocaleLowerCase(),
            price:parseFloat(price),
            category_id: categoryId,
            merchant_id: merchantId,
        }        
    })
    
    return product 



}

export default createProductService
