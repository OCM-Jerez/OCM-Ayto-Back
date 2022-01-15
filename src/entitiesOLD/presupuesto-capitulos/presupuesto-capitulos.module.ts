import { Module } from '@nestjs/common';
import { PresupuestoCapitulosService } from './presupuesto-capitulos.service';
import { PresupuestoCapitulosController } from './presupuesto-capitulos.controller';

@Module({
  controllers: [PresupuestoCapitulosController],
  providers: [PresupuestoCapitulosService]
})
export class PresupuestoCapitulosModule {}
