
// Lo cambio para que coincida con las importaciones del resto de servicios
// import { Injectable } from '@nestjs/common';
// import { UserRepository } from '../../entities/user/user.repository';
// import { InjectRepository } from '@nestjs/typeorm';
// import { compare } from 'bcryptjs';

// @Injectable()
// export class LoginService {
//     constructor(@InjectRepository(UserRepository) private userRepository: UserRepository) { }



// export class LoginService {
    // async findOne(login: string, password: string): Promise<boolean> {
    //   return (await this.userRepository.findOne({ where: { login: login, email: password } }) ? true : false);
    // }

    // async validateUser(login: string, pass: string): Promise<any> {
    //   const user = await this.userRepository.findOne({ login });
    //   console.log('user', user);

    //   if (user && (await compare(pass, user.password))) {
    //     const { password, ...rest } = user;
    //     return rest;
    //   }
    //   return null;
    // }
// }


// export class LoginController
  // @Get(':login/:password')
  // async findOne(@Param('login') login: string, @Param('password') password: string): Promise<boolean> {
  //   const existeLoginPassword = await this.loginService.findOne(login, password);
  //   console.log('existeLoginPassword', existeLoginPassword);
  //   return existeLoginPassword
  // }

//export class AuthService
    // async validateUser(email: string, pass: string): Promise<any> {
    //     const user = await this.usersService.findOne({ email });
    //     if (user && (await compare(pass, user.password))) {
    //         const { password, ...rest } = user;
    //         return rest;
    //     }
    //     return null;
    // }


    // export class AuthService 
    
    // async login(user: User) {
    //     const payload = { login: user.login, email: user.email, id: user.id };
    //     return {
    //         user,
    //         access_token: this.jwtService.sign(payload),
    //     };
    // }