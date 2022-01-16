import { Body, Param, Post, Res, UseGuards, Controller, Get, Logger, Req, UseInterceptors } from '@nestjs/common';
import { Response, Request } from 'express';

// import { AuthGuard, RolesGuard } from '../../security';
// import { User } from '../entities/user/entities/user.entity';
// import { LoggingInterceptor } from '../common/interceptors/logging.interceptor';
// import { ApiBearerAuth, ApiUseTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { ApiBearerAuth, ApiResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from 'src/entities/user.entity';
import { UsersService } from 'src/logic/users/users.service';
import { LoggingInterceptor } from 'src/common/interceptors/logging.interceptor';
// import { AuthService } from '../../service/auth.service';
// import { AuthService } from '../../service/auth.service';
// import { HeaderUtil } from '../../client/header-util';

@ApiTags('register')
@Controller('register')
@UseInterceptors(LoggingInterceptor)
//@ApiBearerAuth()
// @ApiUseTags('user register')
export class RegisterController {
    logger = new Logger('AccountController');

    constructor(
        // private readonly authService: AuthService,
        private readonly usersService: UsersService
    ) { }

    @Post('/register')
    // @ApiOperation({ title: 'Save user' })
    @ApiResponse({
        status: 201,
        description: 'Save user',
        type: User
    })

    async register(@Req() req: Request, @Body() user: User): Promise<boolean> {
        const created = await this.usersService.save(user);
        // HeaderUtil.addEntityCreatedHeaders(req.res, 'user', created.id);
        return true
    }

    @Post('/registerLogin')
    // @ApiOperation({ title: 'Comprueba si existe el login' })
    @ApiResponse({
        status: 201,
        description: 'Comprueba si existe el login',
        type: User
    })

    async registerLogin(@Req() req: Request, @Body() user: User): Promise<boolean> {
        const loginExist = await this.usersService.findByLogin(user.login);

        if (loginExist) {
            console.log(user.login);
            console.log("El login ya existe");
            return true
        } else {
            console.log(user.login);
            console.log("El login no existe");
            return false;
        }
    }

    // @Post('/registerEmail')
    // // @ApiOperation({ title: 'Comprueba si existe el email' })
    // @ApiResponse({
    //     status: 201,
    //     description: 'Comprueba si existe el email',
    //     type: User
    // })

    // async registerEmail(@Req() req: Request, @Body() user: User): Promise<boolean> {
    //     const emailExist = await this.usersService.findByEmail(user.email);

    //     if (emailExist) {
    //         console.log(user.email);
    //         console.log("El email ya existe");
    //         return true
    //     } else {
    //         console.log(user.email);
    //         console.log("El email no existe");
    //         return false;
    //     }
    // }

}
