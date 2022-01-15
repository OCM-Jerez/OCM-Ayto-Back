import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CapituloGastoService } from './capitulo-gasto.service';
import { CapituloGastoController } from './capitulo-gasto.controller';
import { CapituloGastoRepository } from './capitulo-gasto.repository';


@Module({
  imports: [TypeOrmModule.forFeature([CapituloGastoRepository])],
  controllers: [CapituloGastoController],
  providers: [CapituloGastoService]
})
export class CapituloGastoModule { }
