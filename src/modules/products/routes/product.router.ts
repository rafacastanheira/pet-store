import { Router } from 'express'
import ProductsController from '../controller/productController';

const productRouter = Router();
const productsController = new ProductsController();

productRouter.post('/:merchantId', productsController.createProducts);

export default productRouter;
