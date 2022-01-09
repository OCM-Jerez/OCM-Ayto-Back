import { Controller, Post, Get, UseGuards, Body, Req } from '@nestjs/common';
import { LocalAuthGuard } from './guards';
// import { User, Auth } from 'src/common/decorators';
// import { User as UserEntity } from 'src/user/entities';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { User } from 'src/common/decorators';
import { User as UserEntity } from 'src/entities/user/entities/user.entity';

// import { LoginDto } from './dtos/login.dto';

@ApiTags('Auth routes')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(
        @Req() req: any
    ) {
        // return 'login funciona';
        // return 'login funciona con LocalAuthGuard';
        //     console.log('req', req);
        //     console.log('req.user', req.user);
        return req.user;
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