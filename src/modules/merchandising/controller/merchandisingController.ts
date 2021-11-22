import { Request, Response } from 'express';
import { getMerchandisingByUser } from '../service/getMerchandisingByUser';

export default class MerchandisingController{
    public async getMerchandising(req: Request, res: Response) {
        try {
            const user_id = req.user.id

            console.log(user_id)

            const merchandising = await getMerchandisingByUser(user_id)
            
            return res.status(200).json(merchandising)
        } catch (e) {
            return res.status(500).json('erro: ' + e)
        }
    }
}
