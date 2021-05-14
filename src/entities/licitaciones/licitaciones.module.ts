import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LicitacionesService } from './licitaciones.service';
import { LicitacionesController } from './licitaciones.controller';
import { LicitacioneRepository } from './licitacione.repository';
@Module({
  imports: [TypeOrmModule.forFeature([LicitacioneRepository])],
  controllers: [LicitacionesController],
  providers: [LicitacionesService],
  exports: [LicitacionesService],
})
export class LicitacionesModule {}
