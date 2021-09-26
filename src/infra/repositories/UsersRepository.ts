import { getRepository, Not, Repository } from 'typeorm';
import User from '@entities/User';

import IUsersRepository from './IUsersRepository';
import ICreateUserDto from '@modules/users/dtos/ICreateUserDTO';

class UsersRepository implements IUsersRepository {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getRepository(User);
  }

  public async create(userData: ICreateUserDto): Promise<User> {
    const user = this.userRepository.create(userData);
    await this.userRepository.save(user);

    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = this.userRepository.findOne({
      where: { email },
    });

    return user;
  }
}

export default UsersRepository;
