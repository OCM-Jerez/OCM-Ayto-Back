import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { compare } from 'bcryptjs';


import { CreateUserDto, EditUserDto } from './models';
import { User } from 'src/entities/user.entity';
import { IResponseLogin, IloginUser } from '../auth/models/auth.interface';


// import { User } from './entities/user.entity';
// Al tener index.ts en la misma carpeta permite acortar la ruta.
// import { User } from './entities/';

export interface UserFindOne {
  id?: string;
  email?: string;
}

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) { }

  async login(login: string, pass: string): Promise<IResponseLogin> {
    let token = '';
    const user = await this.userRepository.findOne({ login });
    // Hay que devolver el token en el payload
    if (user && (await compare(pass, user.password))) {
      token = this.jwtService.sign({ íd: user.id });
      return {
        user: login,
        token,
      }
    }
    return {
      user: login,
      token,
    }

  }

  async createOne(dto: CreateUserDto) {
    // const userExist = await this.userRepository.findOne({ login: dto.login });

    // if (userExist)
    // throw new BadRequestException('MAM User already registered');
    const newUser = this.userRepository.create(dto);
    const user = await this.userRepository.save(newUser);
    delete user.password;
    return user;
  }

  // async findByLogin(login: string): Promise<boolean> {
  //   return (await this.userRepository.findOne({ where: { login: login } }) ? true : false);
  // }

  async findByLogin(login: string): Promise<IloginUser> {
    const user = await this.userRepository.findOne({ where: { login: login } });
    if (user) {
      return {
        login: login,
      }
    } else {
      return {
        login: '',
      }
    }
  }
}

