import { Controller, Post, Get, Body, Param, HttpException, HttpStatus } from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';

import { UsersService } from '../users/users.service';

import { IResponseLogin } from './models/auth.interface';
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(
        private readonly usersService: UsersService,
    ) { }

    // Login
    @Get(':login/:password')
    async login(@Param('login') login: string, @Param('password') password: string): Promise<IResponseLogin> {
        return await this.usersService.login(login, password);
    }

    // Registro nuevo user
    @Post('/registerLogin')
    async registerUser(@Body() user: any): Promise<boolean> {
        console.log("Entro auth/registerLogin");
        const loginExist = await this.usersService.findByLogin(user.login);
        console.log('loginExist: ', loginExist, user.login, user.password);
        if (!loginExist) {
            console.log('No existe el login');
            // return false;
            // Crear el user
            throw new HttpException('Usuario NO EXISTE', HttpStatus.NOT_FOUND);
        }
        return loginExist;
    }

}