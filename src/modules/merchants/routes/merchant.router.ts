import { Router } from 'express'
import MerchantsController from '../controllers/merchantsController'
import SessionController from '../controllers/SessionMerchantController';

const merchantRouter = Router();
const merchantsController = new MerchantsController();
const sessionMerchantController = new SessionController();

merchantRouter.post('/', merchantsController.createMerchants);
merchantRouter.get('/', merchantsController.getMerchant);
merchantRouter.post('/session', sessionMerchantController.create);

export default merchantRouter;
