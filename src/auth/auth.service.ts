import { Injectable } from '@nestjs/common';
import { UsersService } from '../entities/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) { }

    async validateUser(login: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(login);
        if (user && (await compare(pass, user.password))) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { login: user.login, sub: user.userId };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}