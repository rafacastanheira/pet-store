import { Router } from 'express'

import MerchandisingController from '../controller/merchandisingController'
import ensureAuthenticator from '@modules/users/middlewares/ensureAuthenticated'

const merchandisingRouter = Router()
const merchandisingController = new MerchandisingController()

merchandisingRouter.get('/', ensureAuthenticator, merchandisingController.getMerchandising)

export default merchandisingRouter
