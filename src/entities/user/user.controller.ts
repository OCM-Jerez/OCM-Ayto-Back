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
import { User } from '../../entities/user/entities/user.entity';

import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './dto';
import { HttpException } from '@nestjs/common';

@ApiTags('user')
@Controller('user')
@UseInterceptors(LoggingInterceptor)

export class UserController {
  constructor(private readonly userService: UserService) { }
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
    @Body() updateUserDto: UpdateUserDto,
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