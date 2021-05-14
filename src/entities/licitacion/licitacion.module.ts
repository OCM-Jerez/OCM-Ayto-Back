import { Module } from '@nestjs/common';
import { LicitacionService } from './licitacion.service';
import { LicitacionController } from './licitacion.controller';

@Module({
  controllers: [LicitacionController],
  providers: [LicitacionService],
})
export class LicitacionModule {}
