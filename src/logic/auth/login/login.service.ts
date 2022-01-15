import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

// import { User } from 'src/entities/user/entities';

import { compare } from 'bcryptjs';
import { User } from 'src/entities/user.entity';
@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) { }

  async validateUser(login: string, pass: string): Promise<any> {
    const user = await this.userRepository.findOne({ login });
    // if (!user) {
    //   console.log('UnauthorizedException');
    //   throw new UnauthorizedException('Invalid credentials!');
    // }
    return ((user && (await compare(pass, user.password))) ? true : false)
  }

  // async validateUser(login: string, password: string): Promise<any> {
  //   // faltaria decodificar password
  //   return (await this.userRepository.findOne({ where: { login: login, password: password } }) ? true : false);
  // }

}
