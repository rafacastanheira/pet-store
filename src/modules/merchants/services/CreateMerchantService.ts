import prisma from '@services/prisma'
import AppError from '@shared/errors/AppError';
import { ICreateMerchantDto } from '../dtos/ICreateMerchantDTO'
import { hash } from 'bcryptjs';


const createMerchantService = async (dto: ICreateMerchantDto) => {
    const { name, cnpj, email, password, address } = dto

    const checkEmailExist = await prisma.merchants.findUnique({
        where: {
            email,
        }
    })

    if (checkEmailExist) {
        throw new AppError('Email address already used.');
    }

    const checkCnpjExist = await prisma.merchants.findUnique({
        where: {
            cnpj,
        }
    })

    if (checkCnpjExist) {
        throw new AppError('Cnpj already used.')
    }

    const hashedPassword = await hash(password, 8);

    const merchant = await prisma.merchants.create({
        data: {
            name: name.toLocaleLowerCase(),
            cnpj,
            email: email.toLocaleLowerCase(),
            password: hashedPassword,           
        }
    })

    address &&
        (await prisma.address.create({
            data: {
                city: address.city,
                number: address.number,
                post_code: address.postCode,
                state: address.state,
                street: address.street,
                merchant_Id: merchant.id
            }
        }))
    
    return merchant;

}

export default createMerchantService
