import { hash } from 'bcryptjs';
import prisma from '@services/prisma';
import AppError from '@shared/errors/AppError';
import { ICreateUserDto } from '@modules/users/dtos/ICreateUserDTO';

const createUserService = async (dto: ICreateUserDto) => {
  const { name, email, password, preferences, creditCard, address } = dto;

  const checkUserExists = await prisma.users.findUnique({
    where: {
      email,
    },
  });

  if (checkUserExists) {
    throw new AppError('Email address already used.');
  }

  if (creditCard) {
    creditCard.number = await hash(creditCard.number, 8);
  }

  const hashedPassword = await hash(password, 8);

  const user = await prisma.users.create({
    data: {
      name,
      email,
      password: hashedPassword,
      preferences,
    },
  });

  creditCard &&
    (await prisma.creditCard.create({
      data: {
        card_number: creditCard.number,
        cvv_code: creditCard.cvvCode,
        expiration_date: creditCard.expirationDate,
        holder_name: creditCard.holderName,
        user_id: user.id,
      },
    }));

  address &&
    (await prisma.address.create({
      data: {
        city: address.city,
        number: address.number,
        post_code: address.postCode,
        state: address.state,
        street: address.street,
        user_Id: user.id,
      },
    }));
  return user;
};

export default createUserService;
