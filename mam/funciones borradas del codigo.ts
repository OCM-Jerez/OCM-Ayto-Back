
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