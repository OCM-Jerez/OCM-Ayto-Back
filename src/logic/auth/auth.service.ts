import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { compare } from 'bcryptjs';

import { User } from 'src/entities/user.entity';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private readonly jwtService: JwtService,
    ) { }

    async validateUser(login: string, pass: string): Promise<any> {
        const user = await this.userRepository.findOne({ login });
        // return ((user && (await compare(pass, user.password))) ? true : false)

        // Hay que devolver el token en el payload
        let response = {}
        if (user && (await compare(pass, user.password))) {
            const payload = { login };
            const accessToken = this.jwtService.sign(payload);
            response = {
                login,
                accessToken,
            }
        }
        // console.log('Auth.service response: ', response);
        return response;
    }

}