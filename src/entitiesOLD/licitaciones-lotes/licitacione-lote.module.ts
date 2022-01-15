/* eslint-disable prettier/prettier */

// import { LicitacionesService } from './../licitaciones/licitaciones.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LicitacioneLoteRepository } from './licitacion-lote.repository';
import { LicitacionesLotesController } from './licitaciones-lotes.controller';
import { LicitacionesLotesService } from './licitaciones-lotes.service';
import { LicitacionesModule } from '../licitaciones/licitaciones.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([LicitacioneLoteRepository]),
    LicitacionesModule,
  ],
  controllers: [LicitacionesLotesController],
  providers: [LicitacionesLotesService],
  exports: [LicitacionesLotesService],
})
export class LicitacionesLoteModule {}
