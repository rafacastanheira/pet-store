import { Router } from 'express'
import OrdersController from '../controllers/ordersController'

import ensureAuthenticated from '@modules/users/middlewares/ensureAuthenticated'

const orderRouter = Router()

const orderController = new OrdersController()

orderRouter.post('/:merchantId', ensureAuthenticated, orderController.createOrder)
orderRouter.get('/', ensureAuthenticated, orderController.getOrder)

export default orderRouter
