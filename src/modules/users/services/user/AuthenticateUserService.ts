import { compare } from 'bcryptjs';
import prisma from '@services/prisma';
import AppError from '@shared/errors/AppError';
import { IAuthenticaterUserDTO } from '@modules/users/dtos/IAuthenticaterUserDTO';
import { sign } from 'jsonwebtoken';
import auth from 'config/auth';

const authenticateUserService = async (dto: IAuthenticaterUserDTO) => {
  const { email, password } = dto;

  const user = await prisma.users.findFirst({
    where: {
      email,
    },
  });
  if (!user) {
    throw new AppError('Incorrect email/password combination', 401);
  }

  const passwordMathed = await compare(password, user?.password);
  if (!passwordMathed) {
    throw new AppError('Incorrect email/password combination', 401);
  }

  const { secret, expiresIn } = auth.jwt;

  const token = sign({}, secret, {
    subject: user.id,
    expiresIn,
  });
  return { token };
};

export default authenticateUserService;
