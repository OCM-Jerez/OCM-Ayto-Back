import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProgramasService } from './programas.service';
import { ProgramasController } from './programas.controller';
import { ProgramaRepository } from '../../repositories/programa.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ProgramaRepository])],
  controllers: [ProgramasController],
  providers: [ProgramasService],
})
export class ProgramasModule { }
