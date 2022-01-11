import { Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { UserRepository } from '../../entities/user/user.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LoginService {
  constructor(@InjectRepository(UserRepository) private userRepository: UserRepository) { }

  async findOne(login: string, password: string): Promise<boolean> {
    return (await this.userRepository.findOne({ where: { login: login, email: password } }) ? true : false);
  }

}
