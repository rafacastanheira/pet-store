import User from '@entities/User';

import IUsersCreateRepository from '@infra/repositories/IUsersRepository';
import { hash } from 'bcryptjs';

import AppError from '@shared/errors/AppError';

interface IRequest {
  name: string;
  email: string;
  password: string;
  preferences: string;
  credit_card_id: string;
}

class CreateUserService {
  constructor(private usersRepository: IUsersCreateRepository) {}

  public async execute({
    name,
    email,
    password,
    preferences,
    credit_card_id,
  }: IRequest): Promise<User> {
    const checkUserExists = await this.usersRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError('Email address already used.');
    }

    const hashedPassword = await hash(password, 8);
    const hashedCreditCard = await hash(credit_card_id, 8);
    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
      preferences,
      credit_card_id: hashedCreditCard,
    });

    return user;
  }
}

export default CreateUserService;
