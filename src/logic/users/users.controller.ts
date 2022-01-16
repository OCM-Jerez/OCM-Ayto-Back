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

import { UsersService } from './users.service';
import { CreateUserDto, EditUserDto } from './models';
import { HttpException } from '@nestjs/common';
import { User } from 'src/entities/';

@ApiTags('user')
@Controller('user')
@UseInterceptors(LoggingInterceptor)

export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  // copiado de nestjs-myblog de Ruslan *********************
  @Get()
  async getMany() {
    const data = await this.usersService.getMany();
    return { data };
  }

  @Get(':id')
  async getOne(@Param('id') id: number) {
    const data = await this.usersService.getOne1(id);
    return { data };
  }

  // @Auth({
  //   possession: 'any',
  //   action: 'create',
  //   resource: AppResource.USER,
  // })
  @Post()
  async createOne(@Body() dto: CreateUserDto) {
    const data = await this.usersService.createOne(dto);
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
    const data = await this.usersService.editOne(id, dto);
    // let data;

    // if (this.rolesBuilder.can(user.roles).updateAny(AppResource.USER).granted) {
    //   // esto es un admin
    //   data = await this.usersService.editOne(id, dto);
    // } else {
    //   // esto es un author
    //   const { roles, ...rest } = dto;
    // data = await this.usersService.editOne(id, rest, user);
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
    const data = await this.usersService.deleteOne(id);

    // async deleteOne(@Param('id') id: number, @User() user: UserEntity) {
    //   let data;

    //   if (this.rolesBuilder.can(user.roles).updateAny(AppResource.USER).granted) {
    //     // esto es un admin
    //     data = await this.usersService.deleteOne(id);
    //   } else {
    //     // esto es un author
    //     data = await this.usersService.deleteOne(id, user);
    //   }
    return { message: 'User deleted', data };
  }
  // ***********************************************************

}