import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('login')
@Controller('login')
export class AppController {
  @UseGuards(AuthGuard('local'))
  @Post()
  async login(@Request() req) {
    return req.user;
  }
}