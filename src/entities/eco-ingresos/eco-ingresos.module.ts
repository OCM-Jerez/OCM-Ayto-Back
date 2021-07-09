import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EcoIngresosService } from './eco-ingresos.service';
import { EcoIngresosController } from './eco-ingresos.controller';
import { EcoIngresoRepository } from './eco-ingreso.repository';

@Module({
  imports: [TypeOrmModule.forFeature([EcoIngresoRepository])],
  controllers: [EcoIngresosController],
  providers: [EcoIngresosService]
})
export class EcoIngresosModule { }
