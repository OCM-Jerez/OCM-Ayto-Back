import { Controller, Post, Get, UseGuards, Body, Param } from '@nestjs/common';

import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { JwtAuthGuard, LocalAuthGuard } from './guards';
import { Auth, User } from 'src/common/decorators';
import { User as UserEntity } from 'src/entities/user.entity';
// import { User, Auth } from 'src/common/decorators';


// import { LoginDto } from './dtos/login.dto';
import { AuthGuard } from '@nestjs/passport';
import { LoginDto } from './dtos/login.dto';
// import { LoginService } from './login/login.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
    ) { }

    // login
    @Get(':login/:password')
    async findOne(@Param('login') login: string, @Param('password') password: string): Promise<boolean> {
        return await this.authService.validateUser(login, password);
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