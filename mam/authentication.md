Hago copia en:
D:\Copias app\2021.12.24 OCM-Ayto-Back

git switch -c auth

Sigo instrucciones de esta pagina:
https://docs.nestjs.com/security/authentication#implement-protected-route-and-jwt-strategy-guards


Obtengo estos warning:
npm WARN @nestjs/passport@8.0.1 requires a peer of passport@^0.4.0 but none is installed. You must install peer dependencies yourself.
npm WARN terser-webpack-plugin@5.1.1 requires a peer of webpack@^5.1.0 but none is installed. You must install peer dependencies yourself.
npm WARN ts-loader@8.2.0 requires a peer of webpack@* but none is installed. You must install peer dependencies yourself



Al ejecutar:
curl -X POST http://localhost:3000/auth/login -d '{"username": "john", "password": "changeme"}' -H "Content-Type: application/json"

Obtengo:
{"statusCode":404,"timestamp":"2021-12-25T05:35:08.789Z","path":"/auth/login","errorResponse":{"statusCode":404,"message":"Cannot POST /auth/login","error":"Not Found"}}


Este es el codigo de la pagina de la documentación de NestJS
app.controller.tsJS

import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }
}


Hago estos cambios para que funcione:

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

La llamada queda asi:
curl -X POST http://localhost:3000/api/v1/login -d '{"username": "john", "password": "changeme"}' -H "Content-Type: application/json"