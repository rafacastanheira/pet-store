import prisma from '@services/prisma'
import AppError from '@shared/errors/AppError'

export const getMerchandisingByUser = async (user_id: string) => {
    const user = await prisma.users.findFirst({
        where: {
            id: user_id
        }
    })

    const userPreferences = user?.preferences.map(p => p)

    if (userPreferences?.length) {
        const categories = await prisma.category.findMany({
            where: {
                name: {
                   in: userPreferences
               }
            }
        })

        const products = await prisma.product.findMany({
            where: {
                category_id: {
                    in: categories.map((c) => c.id)
                }
            }
        })

        return products
    }

    const products = await prisma.product.findMany()

    return products
}
