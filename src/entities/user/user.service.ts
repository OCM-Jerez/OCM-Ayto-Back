import {
  Injectable,
} from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateUserDto, UpdateUserDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly UserRepository: Repository<User>,
  ) { }

  create(createUserDto: CreateUserDto) {
    return this.UserRepository.save(createUserDto);
  }

  findAll() {
    return this.UserRepository
      .find({ order: { login: 'ASC' } })
      .catch((err) => console.log(err));
  }

  findOne(id: string) {
    return this.UserRepository.findOne(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.UserRepository.update(id, updateUserDto);
  }

  remove(id: string) {
    return this.UserRepository.delete(id);
  }
}
