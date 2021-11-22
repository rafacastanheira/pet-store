import {orderType, statusOrder, paymentsMethod} from '@prisma/client'

export type ICreateOrderDTO = {
    orderType: orderType,
    status: statusOrder,
    items: [{
        product_id: string,
        quantity: string,
        totalPrice: string
    }],
    benefits: {
        value: number,
        target: string,
        sponsorshipName: string
    },
    total: {
        subTotal: number,
        deliveryFee: number,
        benefits: number,
        orderAmount: number
    },
    payments: {
        method: paymentsMethod,
        value: number,
        status: string,
        requisite: {
            cardNumber?: string,
            brand?: string,
            change?: string
        }
    },
    addressId: string,
    
}


  
