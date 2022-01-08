import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateUserDto, EditUserDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions } from 'typeorm';

// import { User } from './entities/user.entity';
// Al tener index.ts en la misma carpeta permite acortar la ruta.
import { User } from './entities';

export interface UserFindOne {
  id?: string;
  login?: string;
}

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  // copiado de nestjs-myblog de Ruslan *********************

  async getMany() {
    return await this.userRepository.find();
  }

  async getOne1(id: number, userEntity?: User) {
    const user = await this.userRepository
      .findOne(id)
      .then(u => (!userEntity ? u : !!u && userEntity.id === u.id ? u : null));

    if (!user)
      throw new NotFoundException('MAM User does not exists or unauthorized');

    return user;
  }

  async createOne(dto: CreateUserDto) {
    // const userExist = await this.userRepository.findOne({ email: dto.email });
    const userExist = await this.userRepository.findOne({ login: dto.login });

    if (userExist)
      throw new BadRequestException('MAM User already registered');

    const newUser = this.userRepository.create(dto);
    const user = await this.userRepository.save(newUser);

    delete user.password;
    return user;
  }

  async editOne(id: number, dto: EditUserDto, userEntity?: User) {
    console.log(dto);
    const user = await this.getOne(id, userEntity);
    const editedUser = Object.assign(user, dto);
    return await this.userRepository.save(editedUser);
  }

  async deleteOne(id: number, userEntity?: User) {
    const user = await this.getOne(id, userEntity);
    return await this.userRepository.remove(user);
  }

  async findOne(data: UserFindOne) {
    return await this.userRepository
      .createQueryBuilder('user')
      .where(data)
      .addSelect('user.password')
      .getOne();
  }

  // ***********************************************************************



  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.save(createUserDto);
  }

  async findAll() {
    return await this.userRepository
      .find({ order: { login: 'ASC' } })
      .catch((err) => console.log(err));
  }

  async findOne1(id: string) {
    return await this.userRepository.findOne(id);
  }

  async getOne(id: number, userEntity?: User) {
    const user = await this.userRepository
      .findOne(id)
      .then(u => (!userEntity ? u : !!u && userEntity.id === u.id ? u : null));

    if (!user)
      throw new NotFoundException('User does not exists or unauthorized');

    return user;
  }


  async update(id: string, updateUserDto: EditUserDto) {
    return await this.userRepository.update(id, updateUserDto);
  }

  async remove(id: string) {
    return await this.userRepository.delete(id);
  }


  // copiado de soli-back
  async findById(id: string): Promise<User | undefined> {
    const result = await this.userRepository.findOne(id);
    return this.flatAuthorities(result);
  }

  async findByLogin(login: string): Promise<boolean> {
    return (await this.userRepository.findOne({ where: { login: login } }) ? true : false);
  }

  async findByPassword(password: string): Promise<boolean> {
    return (await this.userRepository.findOne({ where: { password: password } }) ? true : false);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const result = await this.userRepository.findOne({ where: { email: email } });
    return result;
  }

  async findByfields(options: FindOneOptions<User>): Promise<User | undefined> {
    options.relations = ['authorities'];
    // console.log('2º paso', options);
    try {
      const result = await this.userRepository.findOne(options);
      return this.flatAuthorities(result);
    } catch (error) {
      console.log(error);
    }
  }

  async find(options: FindManyOptions<User>): Promise<User | undefined> {
    const result = await this.userRepository.findOne(options);
    return this.flatAuthorities(result);
  }

  async findAndCount(options: FindManyOptions<User>): Promise<[User[], number]> {
    options.relations = ['authorities'];
    const resultList = await this.userRepository.findAndCount(options);
    const users: User[] = [];
    if (resultList && resultList[0]) {
      resultList[0].forEach(user => users.push(this.flatAuthorities(user)));
      resultList[0] = users;
    }
    return resultList;
  }

  async save(user: User): Promise<User | undefined> {
    console.log(user);
    if (user.id) {
      // user.lastModifiedDate = new Date();
    } else {
      // user.activated = true;
      // user.createdDate = new Date();
      // user.authorities = [
      //   "ROLE_USER"
      // ];
    }
    user = this.convertInAuthorities(user);
    const result = await this.userRepository.save(user);
    return this.flatAuthorities(result);
  }

  async update1(user: User): Promise<User | undefined> {
    return await this.save(user);
  }

  async delete(user: User): Promise<User | undefined> {
    return await this.userRepository.remove(user);
  }

  private flatAuthorities(user: any): User {
    if (user && user.authorities) {
      const authorities: string[] = [];
      user.authorities.forEach(authority => authorities.push(authority.name));
      user.authorities = authorities;
    }
    console.log('3er paso', user);
    return user;
  }

  private convertInAuthorities(user: any): User {
    if (user && user.authorities) {
      const authorities: any[] = [];
      user.authorities.forEach(authority => authorities.push({ name: authority }));
      user.authorities = authorities;
    }
    return user;
  }







}
