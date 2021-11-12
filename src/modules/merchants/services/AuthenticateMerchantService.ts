import { compare } from 'bcryptjs';
import prisma from '@services/prisma';
import AppError from '@shared/errors/AppError';
import { IAuthenticaterMerchantDTO } from '../dtos/IAuthenticaterMerchantDTO';
import { sign } from 'jsonwebtoken';
import auth from 'config/auth';

const authenticateMerchantService = async (dto: IAuthenticaterMerchantDTO) => {
  const { email, password } = dto;

  const merchant = await prisma.merchants.findFirst({
    where: {
      email,
    },
  });
  if (!merchant) {
    throw new AppError('Incorrect email/password combination', 401);
  }

  const passwordMathed = await compare(password, merchant?.password);
  if (!passwordMathed) {
    throw new AppError('Incorrect email/password combination', 401);
  }

  const { secret, expiresIn } = auth.jwt;

  const token = sign({}, secret, {
    subject: merchant.id,
    expiresIn,
  });
  return { token };
};

export default authenticateMerchantService;
