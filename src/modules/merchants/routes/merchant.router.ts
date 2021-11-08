import { Router } from 'express'
import MerchantsController from '../controllers/merchantsController'

const merchantRouter = Router();
const merchantsController = new MerchantsController();

merchantRouter.post('/', merchantsController.createMerchants);

export default merchantRouter;
