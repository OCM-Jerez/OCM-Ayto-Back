import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { compare } from 'bcryptjs';

import { User } from 'src/entities/user.entity';
import { IResponseLogin } from './models/auth.interface';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private readonly jwtService: JwtService,
    ) { }

    async login(login: string, pass: string): Promise<IResponseLogin> {
        const user = await this.userRepository.findOne({ login });
        // return ((user && (await compare(pass, user.password))) ? true : false)
        // Hay que devolver el token en el payload
        if (user && (await compare(pass, user.password))) {
            const token = this.jwtService.sign({ íd: user.id });
            return {
                user: login,
                token,
            }
        }
        // console.log('Auth.service response: ', response);
        return null;
    }

}