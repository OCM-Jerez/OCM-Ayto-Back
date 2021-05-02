import { Module } from '@nestjs/common';
import { LicitacionesService } from './licitaciones.service';
import { LicitacionesController } from './licitaciones.controller';

@Module({
  controllers: [LicitacionesController],
  providers: [LicitacionesService]
})
export class LicitacionesModule {}
