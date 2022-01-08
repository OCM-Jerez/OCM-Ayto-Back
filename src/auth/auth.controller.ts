import { Controller, Post, Get, UseGuards, Body, Req } from '@nestjs/common';
import { LocalAuthGuard } from './guards';
// import { User, Auth } from 'src/common/decorators';
// import { User as UserEntity } from 'src/user/entities';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { User } from 'src/common/decorators';
// import { LoginDto } from './dtos/login.dto';

@ApiTags('Auth routes')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    // @UseGuards(LocalAuthGuard)
    @Post('login')
    login(
        @User() user: any
    ) {
        // return 'login funciona con LocalAuthGuard';
        console.log('user', user);
        return user;
    }


    @Get('profile')
    profile() {
        return 'profile funciona';
    }

    //   async login(@Body() loginDto: LoginDto, @User() user: UserEntity) {
    //     const data = await this.authService.login(user);
    //     return {
    //       message: 'Login exitoso',
    //       data,
    //     };
    //   }

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