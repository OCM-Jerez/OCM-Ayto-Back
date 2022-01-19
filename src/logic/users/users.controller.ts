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

  @Post()
  async createOne(@Body() dto: CreateUserDto) {
    console.log('Crear usuer dto: ', dto);
    const data = await this.usersService.createOne(dto);
    return { message: 'User created', data };
  }

}