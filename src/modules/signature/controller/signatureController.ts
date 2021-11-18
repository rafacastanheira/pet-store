import { Request, Response } from 'express';
import { createSignatureService } from '../service/CreateSignatureService';
import { ICreateSignatureDTO } from '../dtos/ICreateSignatureDTO';

export default class SignatureController {
    public async createSignature(req: Request, res: Response) {
        const userId = req.user.id

        const signature = await createSignatureService(req.body as ICreateSignatureDTO, userId)
        return res.status(200).json(signature)
    }
}
