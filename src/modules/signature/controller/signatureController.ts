import { Request, Response } from 'express';
import { createSignatureService } from '../service/CreateSignatureService';
import { ICreateSignatureDTO } from '../dtos/ICreateSignatureDTO';
import prisma from '@services/prisma'

export default class SignatureController {
    public async createSignature(req: Request, res: Response) {
        const userId = req.user.id

        const signature = await createSignatureService(req.body as ICreateSignatureDTO, userId)
        return res.status(200).json(signature)
    }
    public async getSignagure(req: Request, res: Response) {
        const user_id = req.user.id

        const signature = await prisma.signature.findMany({
            where: {user_id}
        })

        const signature_id = signature.map((s) => s.id)
        
        
        const signature_product = await prisma.signature_product.findMany({
            where: {
                signature_id: {
                    in: signature_id
                }
            }
        })

        const products = signature_product.map(({ id,  created_at, updated_at, ...rest }) => rest)
        
        const response = signature.map(s => [s, products.filter(({ signature_id, ...p }) => {
            if (signature_id === s.id) {
                return p
            }
        })])

        return res.status(200).json(response)
    }
}
