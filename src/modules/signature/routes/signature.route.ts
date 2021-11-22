import { Router } from 'express'
import SignatureController from '../controller/signatureController';

const signatureRouter = Router();
const signatureController = new SignatureController();
import ensureAuthenticated from '@modules/users/middlewares/ensureAuthenticated'

signatureRouter.post('/', ensureAuthenticated, signatureController.createSignature);
signatureRouter.get('/', ensureAuthenticated, signatureController.getSignagure);

export default signatureRouter;
