import { Module } from '@nestjs/common';
import { PresupuestoModificacionesService } from './presupuesto-modificaciones.service';
import { PresupuestoModificacionesController } from './presupuesto-modificaciones.controller';

@Module({
  controllers: [PresupuestoModificacionesController],
  providers: [PresupuestoModificacionesService]
})
export class PresupuestoModificacionesModule {}
