import prisma from '@services/prisma'
import AppErro from '@shared/errors/AppError'

import { ICreateOrderDTO } from '../dto/ICreateOrderDTO'

const createOrderService = async (dto: ICreateOrderDTO, userId: string, merchantId: string) => {
    let { orderType = 'delivery', status = 'pending', items, benefits, total, payments } = dto
    
    const product = items.map((item) => item.product)

    const isProductMerchant = await prisma.product.findMany({
        where: {
            name: {
                in: product
            },
            merchant_id: merchantId
        }
    })

    if (product.length !== isProductMerchant.length) {
        throw new AppErro('All product must belongs to the same merchant.', 400)
    }

    let requisitePayment = {}

    if (payments.method === 'card') {
        const card = await prisma.creditCard.findFirst({
            where: {
                user_id: userId
            }
        })

        requisitePayment = {
            cardNumber: card?.card_number,
            brand: card?.brand
        }
    } else {
        requisitePayment = {
            change: payments.requisite.change
        }
    }


    const payment = await prisma.payments.create({
        data: {
            method: payments.method,
            value: total.orderAmount,
            status: 'pendente',
            requisite: JSON.stringify(requisitePayment),
        }
    })


    const userAddress = await prisma.address.findFirst({
        where: {
            user_Id: userId
        }
    })

    const order = await prisma.order.create({
        data: {
            orderType,
            status,
            items: JSON.stringify(items),
            benefits: JSON.stringify(benefits),
            total: JSON.stringify(total),
            payments_id: payment.id,
            address_id: userAddress? userAddress.id : 'null',
            user_id: userId,
            merchant_id: merchantId
        }
    })
 
    return order

}

export default createOrderService
