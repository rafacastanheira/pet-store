import prisma from '@services/prisma'
import AppError from '@shared/errors/AppError';
import { ICreateCategoryDto } from "../dtos/ICreateCategoryDTO";

const createCategoryService = async (dto: ICreateCategoryDto) => {
    const { name, productCategory } = dto;

    const checkCategoryExist = await prisma.category.findUnique({
        where: {name}
    })

    if (checkCategoryExist) {
        throw new AppError('Category already exist.')
    }

    const category = await prisma.category.create({
        data: {
            name,
            productCategory
        }
    })

    return category
}

export default createCategoryService
