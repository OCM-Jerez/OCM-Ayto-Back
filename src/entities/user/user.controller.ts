import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseInterceptors,
  Put,
  Req,
  HttpStatus,
} from '@nestjs/common';
import { Request } from 'express';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoggingInterceptor } from 'src/common/interceptors/logging.interceptor';
// https://dev.to/larswaechter/path-aliases-with-typescript-in-nodejs-4353?fbclid=IwAR0aBfgsVFija83iKdGKsU1WY0Ir4iJDXr1KNJwp40TeoxTyU-E9AxLsqKM
import { User } from '../../entities/user/entities';

import { UserService } from './user.service';
import { CreateUserDto, EditUserDto } from './dto';
import { HttpException } from '@nestjs/common';

@ApiTags('user')
@Controller('user')
@UseInterceptors(LoggingInterceptor)

export class UserController {
  constructor(private readonly userService: UserService) { }

  // copiado de nestjs-myblog de Ruslan *********************

  @Get()
  async getMany() {
    const data = await this.userService.getMany();
    return { data };
  }

  // @Post('register')
  // async publicRegistration(@Body() dto: UserRegistrationDto) {
  //   const data = await this.userService.createOne({
  //     ...dto,
  //     roles: [AppRoles.AUTHOR],
  //   });
  //   return { message: 'User registered', data };
  // }

  @Get(':id')
  async getOne(@Param('id') id: number) {
    const data = await this.userService.getOne1(id);
    return { data };
  }

  // @Auth({
  //   possession: 'any',
  //   action: 'create',
  //   resource: AppResource.USER,
  // })

  @Post()
  async createOne(@Body() dto: CreateUserDto) {
    const data = await this.userService.createOne(dto);
    return { message: 'User created', data };
  }

  // @Auth({
  //   possession: 'own',
  //   action: 'update',
  //   resource: AppResource.USER,
  // })
  @Put(':id')
  async editOne(
    @Param('id') id: number,
    @Body() dto: EditUserDto,
    // @User() user: UserEntity,
  ) {
    const data = await this.userService.editOne(id, dto);
    // let data;

    // if (this.rolesBuilder.can(user.roles).updateAny(AppResource.USER).granted) {
    //   // esto es un admin
    //   data = await this.userService.editOne(id, dto);
    // } else {
    //   // esto es un author
    //   const { roles, ...rest } = dto;
    // data = await this.userService.editOne(id, rest, user);
    // }
    return { message: 'User edited', data };
  }

  // @Auth({
  //   action: 'delete',
  //   possession: 'own',
  //   resource: AppResource.USER,
  // })
  @Delete(':id')
  async deleteOne(
    @Param('id') id: number,) {
    const data = await this.userService.deleteOne(id);


    // async deleteOne(@Param('id') id: number, @User() user: UserEntity) {
    //   let data;

    //   if (this.rolesBuilder.can(user.roles).updateAny(AppResource.USER).granted) {
    //     // esto es un admin
    //     data = await this.userService.deleteOne(id);
    //   } else {
    //     // esto es un author
    //     data = await this.userService.deleteOne(id, user);
    //   }
    return { message: 'User deleted', data };
  }


  // ***********************************************************







  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log("user Post");
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: EditUserDto,
  ) {
    return await this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }

  @Post('/registerLogin')
  // @ApiOperation({ title: 'Comprueba si existe el login' })
  @ApiResponse({
    status: 201,
    description: 'Comprueba si existe el login',
    type: User
  })

  // async registerLogin(@Req() req: Request, @Body() user: any): Promise<boolean> {
  async registerLogin(@Body() user: any): Promise<boolean> {
    const loginExist = await this.userService.findByLogin(user.login);
    // console.log('loginExist: ', loginExist, user.login);
    // if (!loginExist) {
    //   throw new HttpException('Usuario NO EXISTE', HttpStatus.NOT_FOUND);
    // }
    return loginExist;
  }


  @Post('/passwordExist')
  // @ApiOperation({ title: 'Comprueba si existe el login' })
  @ApiResponse({
    status: 201,
    description: 'Comprueba si existe el login',
    type: User
  })

  // async registerLogin(@Req() req: Request, @Body() user: any): Promise<boolean> {
  async passwordExist(@Body() user: any): Promise<boolean> {
    const loginExist = await this.userService.findByPassword(user.password);
    // console.log('loginExist: ', loginExist, user.login);
    // if (!loginExist) {
    //   throw new HttpException('Usuario NO EXISTE', HttpStatus.NOT_FOUND);
    // }
    return loginExist;
  }

  @Post('/register')
  // @ApiOperation({ title: 'Save user' })
  @ApiResponse({
    status: 201,
    description: 'Save user',
    type: User
  })

  async register(@Req() req: Request, @Body() user: User): Promise<boolean> {
    console.log('async register ', [user]);
    const created = await this.userService.save(user);
    // HeaderUtil.addEntityCreatedHeaders(req.res, 'user', created.id);
    return true
  }


}