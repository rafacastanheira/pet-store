import prisma from '@services/prisma'
import AppError from '@shared/errors/AppError'
import { ICreateProductDTO } from '../dtos/ICreateProductDTO'

const createProductService = async (
    dto: ICreateProductDTO,
    merchantId: string
) => {
    const { imageUrl, name, price, categoryId } = dto

    const checkProductExist = await prisma.product.findFirst({
        where: {
            AND: [
                {name}, {category_id: categoryId}, {merchant_id: merchantId}
            ]
        }
    })

    if (checkProductExist) {
        throw new AppError('Product already exist.')
    }


    const product = await prisma.product.create({
        data: {
            name,
            imageUrl,
            price,
            category_id: categoryId,
            merchant_id: merchantId,
        }        
    })
    
    return product 



}

export default createProductService
