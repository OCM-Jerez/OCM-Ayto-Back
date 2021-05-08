import { Module } from '@nestjs/common';
import { ContratosMenoresService } from './contratos-menores.service';
import { ContratosMenoresController } from './contratos-menores.controller';

@Module({
  controllers: [ContratosMenoresController],
  providers: [ContratosMenoresService]
})
export class ContratosMenoresModule {}
