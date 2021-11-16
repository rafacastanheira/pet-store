import { Router } from 'express';

import usersRouter from '@modules/users/routes/users.router';
import merchantRouter from '@modules/merchants/routes/merchant.router';
import categoryRouter from '@modules/categories/routes/category.router';
import productRouter from '@modules/products/routes/product.router';
import orderRouter from '@modules/orders/routes/order.router';

const routers = Router();

routers.use('/users', usersRouter);
routers.use('/merchants', merchantRouter)
routers.use('/categories', categoryRouter)
routers.use('/merchant/product', productRouter)
routers.use('/order/merchant', orderRouter)

export default routers;
