import { Module } from '@nestjs/common';
import { RegisterController } from './register.controller';
import { RegisterRepository } from './register.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from 'src/logic/users/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([RegisterRepository])],
  controllers: [RegisterController],
  providers: [UsersService]
})
export class RegisterModule { }
