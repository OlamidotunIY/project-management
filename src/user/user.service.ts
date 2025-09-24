import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './types/user.enitity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY') private userRepository: Repository<User>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async createUser(name: string, email: string): Promise<User> {
    const newUser = this.userRepository.create({ name, email });
    return this.userRepository.save(newUser);
  }
}
