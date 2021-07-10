import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DistritoService } from './distrito.service';
import { DistritoController } from './distrito.controller';
import { DistritoRepository } from './distrito.repository';


@Module({
  imports: [TypeOrmModule.forFeature([DistritoRepository])],
  controllers: [DistritoController],
  providers: [DistritoService]
})
export class DistritoModule { }
