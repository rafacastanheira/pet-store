import { hash } from 'bcryptjs';
import prisma from '../prisma';
import AppError from '@shared/errors/AppError';
import { ICreateUserDto } from '@modules/users/dtos/ICreateUserDTO';

const createUserService = async (dto: ICreateUserDto) => {
  const { name, email, password, preferences, credit_card_id } = dto;

  const checkUserExists = await prisma.users.findUnique({
    where: {
      email,
    },
  });

  if (checkUserExists) {
    throw new AppError('Email address already used.');
  }

  const hashedPassword = await hash(password, 8);
  const hashedCreditCard = await hash(credit_card_id, 8);

  return await prisma.users.create({
    data: {
      name,
      email,
      password: hashedPassword,
      preferences,
      credit_card_id: hashedCreditCard,
    },
  });
};

export default createUserService;
