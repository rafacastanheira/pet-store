import { Router } from 'express'
import CategoriesController from '../controller/categoriesController'

const categoryRouter = Router();
const categoriesController = new CategoriesController();

categoryRouter.post('/', categoriesController.createCategories);
categoryRouter.get('/', categoriesController.getCategories);

export default categoryRouter;
