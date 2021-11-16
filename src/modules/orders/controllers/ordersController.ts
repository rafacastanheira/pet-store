import { Request, Response } from 'express'

import createOrderService from '../services/CreateOrderService'
import { ICreateOrderDTO } from '../dto/ICreateOrderDTO'

export default class OrdersController{
    public async createOrder(req: Request, res: Response): Promise<Response>{
        const {merchantId} = req.params
        const userId = req.user.id

        const order = await createOrderService(req.body as ICreateOrderDTO, userId, merchantId)

        return res.json(order)
    }
}
