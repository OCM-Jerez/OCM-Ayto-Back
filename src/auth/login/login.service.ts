import { Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { UserRepository } from '../../entities/user/user.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LoginService {
  constructor(@InjectRepository(UserRepository) private userRepository: UserRepository) { }

  create(createLoginDto: CreateLoginDto) {
    return 'This action adds a new login';
  }

  findAll() {
    return `This action returns all login`;
  }

  async findOne(id: string) {
    // console.log(`This action returns a #${id} login`);
    const result = await this.userRepository.findOne({ where: { login: id } });
    console.log(result);
    return result;
    // return `This action returns a #${id} login`;
  }

  update(id: string, updateLoginDto: UpdateLoginDto) {
    return `This action updates a #${id} login`;
  }

  remove(id: string) {
    return `This action removes a #${id} login`;
  }
}
