import { Controller, Post, Get, Body, Param, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from '../users/users.service';
import { IResponseLogin, IloginUser } from './models/auth.interface';
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
    async registerUser(@Body() user: any): Promise<IloginUser> {
        const newUser = await this.usersService.findByLogin(user.login);
        if (newUser.login === '') {
            const newUserCreated = await this.usersService.createOne(user);
            // console.log('newUserCreated: ', newUserCreated);
        }
        return newUser;
    }

}