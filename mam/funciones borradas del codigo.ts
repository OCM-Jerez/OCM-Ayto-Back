
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


    // export class UsersController
      // @Post('register')
  // async publicRegistration(@Body() dto: UserRegistrationDto) {
  //   const data = await this.usersService.createOne({
  //     ...dto,
  //     roles: [AppRoles.AUTHOR],
  //   });
  //   return { message: 'User registered', data };
  // }

  // @Post('/registerLogin')
  // // @ApiOperation({ title: 'Comprueba si existe el login' })
  // @ApiResponse({
  //   status: 201,
  //   description: 'Comprueba si existe el login',
  //   type: User
  // })
  // // async registerLogin(@Req() req: Request, @Body() user: any): Promise<boolean> {
  // async registerLogin(@Body() user: any): Promise<boolean> {
  //   console.log("Entro registerLogin");
  //   const loginExist = await this.usersService.findByLogin(user.login);
  //   console.log('loginExist: ', loginExist, user.login, user.password);
  //   if (!loginExist) {
  //     throw new HttpException('Usuario NO EXISTE', HttpStatus.NOT_FOUND);
  //   }
  //   return loginExist;
  // }



  // export class UsersController 
    // @Get()
  // findAll() {
  //   return this.usersService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne1(id);
  // }

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   console.log("user Post");
  //   return this.usersService.create(createUserDto);
  // }


  // @Put(':id')
  // async update(
  //   @Param('id') id: string,
  //   @Body() updateUserDto: EditUserDto,
  // ) {
  //   return await this.usersService.update(id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(id);
  // }

  // @Post('/passwordExist')
  // // @ApiOperation({ title: 'Comprueba si existe el login' })
  // @ApiResponse({
  //   status: 201,
  //   description: 'Comprueba si existe el login',
  //   type: User
  // })

  // // async registerLogin(@Req() req: Request, @Body() user: any): Promise<boolean> {
  // async passwordExist(@Body() user: any): Promise<boolean> {
  //   const loginExist = await this.usersService.findByPassword(user.password);
  //   // console.log('loginExist: ', loginExist, user.login);
  //   // if (!loginExist) {
  //   //   throw new HttpException('Usuario NO EXISTE', HttpStatus.NOT_FOUND);
  //   // }
  //   return loginExist;
  // }

  // @Post('/register')
  // // @ApiOperation({ title: 'Save user' })
  // @ApiResponse({
  //   status: 201,
  //   description: 'Save user',
  //   type: User
  // })

  // async register(@Req() req: Request, @Body() user: User): Promise<boolean> {
  //   console.log('async register ', [user]);
  //   const created = await this.usersService.save(user);
  //   // HeaderUtil.addEntityCreatedHeaders(req.res, 'user', created.id);
  //   return true
  // }