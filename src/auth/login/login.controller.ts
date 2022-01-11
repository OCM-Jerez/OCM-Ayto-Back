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

  @Get()
  findAll() {
    console.log("entrando a login");
    return {
      message: "entrando a login"
    }
    return this.loginService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // console.log("entrando a login con parametro ");
    // return {
    //   id,
    //   message: "entrando a login con parametro"
    // }
    return this.loginService.findOne(id);
  }

  // @Post()
  // create(@Body() createLoginDto: CreateLoginDto) {
  //   return this.loginService.create(createLoginDto);
  // }




  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateLoginDto: UpdateLoginDto) {
  //   return this.loginService.update(+id, updateLoginDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.loginService.remove(+id);
  // }
}
