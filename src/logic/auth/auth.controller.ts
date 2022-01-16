import { Controller, Post, Get, UseGuards, Body, Param, HttpException, HttpStatus } from '@nestjs/common';

import { ApiTags, ApiBearerAuth, ApiResponse } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';

import { JwtAuthGuard, LocalAuthGuard } from './guards';
import { Auth, User } from 'src/common/decorators';
import { User as UserEntity } from 'src/entities/user.entity';

import { AuthGuard } from '@nestjs/passport';

// import { User, Auth } from 'src/common/decorators';
// import { LoginDto } from './dtos/login.dto';
// import { LoginService } from './login/login.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly usersService: UsersService,
    ) { }

    // login
    @Get(':login/:password')
    async findOne(@Param('login') login: string, @Param('password') password: string): Promise<boolean> {
        return await this.authService.validateUser(login, password);
    }

    // registro nuevo user
    @Post('/registerLogin')
    // @ApiOperation({ title: 'Comprueba si existe el login' })
    @ApiResponse({
        status: 201,
        description: 'Comprueba si existe el login',
        type: User
    })
    // async registerLogin(@Req() req: Request, @Body() user: any): Promise<boolean> {
    async registerLogin(@Body() user: any): Promise<boolean> {
        console.log("Entro auth/registerLogin");
        const loginExist = await this.usersService.findByLogin(user.login);
        console.log('loginExist: ', loginExist, user.login, user.password);
        if (!loginExist) {
            throw new HttpException('Usuario NO EXISTE', HttpStatus.NOT_FOUND);
        }
        return loginExist;
    }


    // @UseGuards(LocalAuthGuard)
    // @Post('login')
    // async login(
    //     @Body() loginDto: LoginDto,
    //     @User() user: UserEntity
    // ) {
    //     const data = await this.authService.login(user);
    //     return {
    //         message: 'Login exitoso',
    //         data,
    //     };
    // }

    // @UseGuards(JwtAuthGuard)
    // @ApiBearerAuth()
    // @Auth()
    // @Get('profile')
    // profile(@User() user: UserEntity) {
    //     return {
    //         message: 'Petición correcta',
    //         user,
    //     };
    // }

    // @Auth()
    // @Get('refresh')
    // refreshToken(@User() user: UserEntity) {
    //     const data = this.authService.login(user);
    //     return {
    //         message: 'Refresh exitoso',
    //         data,
    //     };
    // }

}