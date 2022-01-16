import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import { IsEmail } from 'class-validator';
import { User } from 'src/entities/user.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) { }

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne({ email });
        if (user && (await compare(pass, user.password))) {
            const { password, ...rest } = user;
            return rest;
        }
        return null;
    }

    async login(user: User) {
        const payload = { login: user.login, email: user.email, id: user.id };
        return {
            user,
            access_token: this.jwtService.sign(payload),
        };
    }
}