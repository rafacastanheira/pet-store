import { Request, Response } from 'express';
import createCategoryService from '../services/CreateCategoryService';
import { ICreateCategoryDto } from '../dtos/ICreateCategoryDTO';

import prisma from '@services/prisma'

export default class CategoriesController {
    public async createCategories(req: Request, res: Response): Promise<Response>{
        const category = await createCategoryService(req.body as ICreateCategoryDto)

        return res.status(200).json(category);
    }
    public async getCategories(req: Request, res: Response): Promise<Response>{
        const category = await prisma.category.findMany()

        return res.status(200).json(category)
    }
}
