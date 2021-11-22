import { Request, Response } from 'express'

import createOrderService from '../services/CreateOrderService'
import { ICreateOrderDTO } from '../dto/ICreateOrderDTO'
import prisma from '@services/prisma'

export default class OrdersController{
    public async createOrder(req: Request, res: Response): Promise<Response>{
        const {merchantId} = req.params
        const userId = req.user.id

        const order = await createOrderService(req.body as ICreateOrderDTO, userId, merchantId)

        return res.json(order)
    }

    public async getOrder(req: Request, res: Response): Promise<Response>{
        const user_id = req.user.id

        console.log('id ', user_id)
        const order = await prisma.order.findMany({
            where: {user_id}
        })

        return res.status(200).json(order)
    }
}
