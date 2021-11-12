import { Router } from 'express'
import ProductsController from '../controller/productController';

const productRouter = Router();
const productsController = new ProductsController();
import ensureAuthenticated from '@modules/merchants/middlewares/ensureAuthenticated'

productRouter.post('/', ensureAuthenticated, productsController.createProducts);

export default productRouter;
