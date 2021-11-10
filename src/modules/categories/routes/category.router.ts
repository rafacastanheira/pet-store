import { Router } from 'express'
import CategoriesController from '../controller/categoriesController'

const categoryRouter = Router();
const categoriesController = new CategoriesController();

categoryRouter.post('/', categoriesController.createCategories);

export default categoryRouter;
