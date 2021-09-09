import { Request, Response } from 'express';

import CreateUserService from '../services/CreateUserService';

import UsersRepository from '@infra/repositories/UsersRepository';

import { classToClass } from 'class-transformer';

export default class UsersController {
  public async createUsers(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { name, email, password, preferences, credit_card_id } = request.body;

    const userRepository = new UsersRepository();

    const createUserService = new CreateUserService(userRepository);

    const user = await createUserService.execute({
      name,
      email,
      password,
      preferences,
      credit_card_id,
    });

    return response.status(200).json(classToClass(user));
  }
}
