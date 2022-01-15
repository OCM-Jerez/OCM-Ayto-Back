import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CapituloIngresoService } from './capitulo-ingreso.service';
import { CapituloIngresoController } from './capitulo-ingreso.controller';
import { CapituloIngresoRepository } from './capitulo-ingreso.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CapituloIngresoRepository])],
  controllers: [CapituloIngresoController],
  providers: [CapituloIngresoService]
})
export class CapituloIngresoModule { }
