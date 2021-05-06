import { Module } from '@nestjs/common';
import { ProgramasService } from './programas.service';
import { ProgramasController } from './programas.controller';
import { ProgramaRepository } from './programa.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProgramaRepository])],
  controllers: [ProgramasController],
  providers: [ProgramasService]
})
export class ProgramasModule {}
