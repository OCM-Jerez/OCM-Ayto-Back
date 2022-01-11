import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
/*
En este controlador se encuentran las rutas para el login y logout
Tenemos otros controladores para register y otro para profile (datos completos del usuario)
*/

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) { }

  @Get(':login')
  async findOne(@Param('login') login: string): Promise<boolean> {
    const existeLoginPassword = await this.loginService.findOne(login);
    console.log('existeLoginPassword', existeLoginPassword);
    return existeLoginPassword
  }

}
