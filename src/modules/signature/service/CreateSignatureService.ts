import prisma from '@services/prisma'
import AppError from '@shared/errors/AppError'
import { ICreateSignatureDTO } from '../dtos/ICreateSignatureDTO'
import {addDays} from 'date-fns'


export const createSignatureService = async (dto: ICreateSignatureDTO, user_id: string) => {
    const { days } = dto
    
    // const isProductValid = product.every(p => p.merchantId === product[0].merchantId)

    // if (!isProductValid) {
    //     throw new AppError('All product must belongs to the same merchant.')
    // }

    // const merchant = await prisma.merchants.findFirst({
    //     where: {
    //         id: product[0].merchantId
    //     }
    // })

    // if (!merchant) {
    //     throw new AppError('Invalid merchantId.')
    // }

    // const discount = 0.15
    // const nextDelivery = addDays(new Date(), days)
    // // const amountTotal = product.reduce((current, next) => current + next.value, 0)
    // // const total = amountTotal - (amountTotal * discount)
    // const signature = await prisma.signature.create({
    //     data: {
    //         days,
    //         // merchant_id: product[0].merchantId,
    //         user_id,
    //         nextDelivery,
    //     }
    // })

    // return signature 

}
