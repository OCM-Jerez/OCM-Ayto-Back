import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from 'src/entities/user/entities';

import { compare } from 'bcryptjs';
@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) { }

  async validateUser(login: string, pass: string): Promise<any> {
    const user = await this.userRepository.findOne({ login });
    return ((user && (await compare(pass, user.password))) ? true : false)
  }

  // async validateUser(login: string, password: string): Promise<any> {
  //   // faltaria decodificar password
  //   return (await this.userRepository.findOne({ where: { login: login, password: password } }) ? true : false);
  // }

}
