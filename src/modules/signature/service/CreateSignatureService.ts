import prisma from '@services/prisma'
import AppError from '@shared/errors/AppError'
import { ICreateSignatureDTO } from '../dtos/ICreateSignatureDTO'
import {addDays} from 'date-fns'


export const createSignatureService = async (dto: ICreateSignatureDTO, user_id: string) => {
    const { days, product, name } = dto
    
    const isProductValid = product.every(p => p.merchant_id === product[0].merchant_id)

    if (!isProductValid) {
        throw new AppError('All product must belongs to the same merchant.')
    }

    const merchant = await prisma.merchants.findFirst({
        where: {
            id: product[0].merchant_id
        }
    })

    if (!merchant) {
        throw new AppError('Invalid merchantId.')
    }

    const discount = 0.15
    const nextDelivery = addDays(new Date(), days)
    const amountTotal = product.reduce((current, next) => current + next.price, 0)
    const total = amountTotal - (amountTotal * discount)

    const signature = await prisma.signature.create({
        data: {
            name,
            days,
            merchant_id: merchant.id,
            user_id,
            nextDelivery,
        }
    })

    product.forEach(async (p) => {
        await prisma.signature_product.create({
            data: {
                discount,
                total,
                product_id: p.id,
                signature_id: signature.id,
            }
        })
    })
    
    return signature 
}
