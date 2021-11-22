import { Router } from 'express'
import ProductsController from '../controller/productController';
import multer from 'multer'
import uploadConfig from '@config/upload'

const productRouter = Router();

const upload = multer(uploadConfig)

const productsController = new ProductsController();
import ensureAuthenticated from '@modules/merchants/middlewares/ensureAuthenticated'

productRouter.post('/', ensureAuthenticated, upload.single('imageUrl'), productsController.createProducts);
productRouter.get('/', productsController.getProducts);
productRouter.patch('/img', ensureAuthenticated, upload.single('file'), async (req, res) => {
    return res.json('ok')
});

export default productRouter;
