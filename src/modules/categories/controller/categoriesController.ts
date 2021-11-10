import { Request, Response } from 'express';
import createCategoryService from '../services/CreateCategoryService';
import { ICreateCategoryDto } from '../dtos/ICreateCategoryDTO';

export default class CategoriesController {
    public async createCategories(req: Request, res: Response): Promise<Response>{
        const category = await createCategoryService(req.body as ICreateCategoryDto)

        return res.status(200).json(category);
    }
}
