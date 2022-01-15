import { Module } from '@nestjs/common';
import { RegisterController } from './register.controller';
import { RegisterRepository } from './register.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from 'src/logic/user/user.service';
// import { UserService } from 'src/entities/user/user.service';


@Module({
  imports: [TypeOrmModule.forFeature([RegisterRepository])],
  controllers: [RegisterController],
  providers: [UserService]
})
export class RegisterModule { }
