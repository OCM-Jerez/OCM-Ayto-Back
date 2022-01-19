import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
// import { compare } from 'bcryptjs';

import { User } from 'src/entities/user.entity';
// import { IResponseLogin } from './models/auth.interface';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private readonly jwtService: JwtService,
    ) { }

    // async login(login: string, pass: string): Promise<IResponseLogin> {
    //     let token = '';
    //     const user = await this.userRepository.findOne({ login });
    //     // Hay que devolver el token en el payload
    //     if (user && (await compare(pass, user.password))) {
    //         token = this.jwtService.sign({ íd: user.id });
    //         return {
    //             user: login,
    //             token,
    //         }
    //     }
    //     return {
    //         user: login,
    //         token,
    //     }

    // }

}