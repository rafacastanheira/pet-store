import prisma from '@services/prisma'
import AppError from '@shared/errors/AppError';
import { ICreateCategoryDto } from "../dtos/ICreateCategoryDTO";

const createCategoryService = async (dto: ICreateCategoryDto) => {
    const { name, productCategory } = dto;

    const category = await prisma.category.create({
        data: {
            name: name.toLowerCase(),
            productCategory:  productCategory.toLowerCase()
        }
    })

    return category
}

export default createCategoryService
