import { Controller, Post, Get, UseGuards, Body } from '@nestjs/common';
import { JwtAuthGuard, LocalAuthGuard } from './guards';
// import { User, Auth } from 'src/common/decorators';
// import { User as UserEntity } from 'src/user/entities';
import { AuthService } from './auth.service';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { Auth, User } from 'src/common/decorators';
// import { User as UserEntity } from 'src/entities/user/entities/user.entity';
import { User as UserEntity } from 'src/entities/user.entity';


// import { LoginDto } from './dtos/login.dto';
import { AuthGuard } from '@nestjs/passport';
import { LoginDto } from './dtos/login.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(
        @Body() loginDto: LoginDto,
        @User() user: UserEntity
    ) {
        const data = await this.authService.login(user);
        return {
            message: 'Login exitoso',
            data,
        };
    }

    // @UseGuards(JwtAuthGuard)
    // @ApiBearerAuth()
    @Auth()
    @Get('profile')
    profile(@User() user: UserEntity) {
        return {
            message: 'Petición correcta',
            user,
        };
    }

    @Auth()
    @Get('refresh')
    refreshToken(@User() user: UserEntity) {
        const data = this.authService.login(user);
        return {
            message: 'Refresh exitoso',
            data,
        };
    }
}