import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import { IsEmail } from 'class-validator';
import { UserService } from '../entities/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) { }

    async validateUser(email: string, pass: string): Promise<any> {
        console.log('validateUser', IsEmail, pass);
        const user = await this.userService.findOne({ email });
        if (user && (await compare(pass, user.password))) {
            // if (user && pass === user.password) {
            const { password, ...rest } = user;
            return rest;
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