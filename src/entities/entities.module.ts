import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BarriosModule } from './barrios/barrios.module';
import { BibliotecaModule } from './biblioteca/biblioteca.module';
import { ComisionesModule } from './comisiones/comisiones.module';
import { ContratosMenoresModule } from './contratos-menores/contratos-menores.module';
import { DelegacionesModule } from './delegaciones/delegaciones.module';
import { DeudaModule } from './deuda/deuda.module';
import { EconomicosModule } from './economicos/economicos.module';
import { EnteModule } from './ente/ente.module';
import { EntesModule } from './entes/entes.module';
import { HemerotecaModule } from './hemeroteca/hemeroteca.module';
import { LegislacionModule } from './legislacion/legislacion.module';
import { LicitacionesModule } from './licitaciones/licitaciones.module';
import { OrganicosModule } from './organicos/organicos.module';
import { OrganosContratacionModule } from './organos-contratacion/organos-contratacion.module';
import { PmpModule } from './pmp/pmp.module';
import { PresupuestoCapitulosModule } from './presupuesto-capitulos/presupuesto-capitulos.module';
import { PresupuestoModificacionesModule } from './presupuesto-modificaciones/presupuesto-modificaciones.module';
import { PresupuestosModule } from './presupuestos/presupuestos.module';
import { ProgramasModule } from './programas/programas.module';
import { SubvencionesModule } from './subvenciones/subvenciones.module';
import { TemasModule } from './temas/temas.module';

@Module({
  imports: [
    // TypeOrmModule.forFeature([BarriosModule]),
    BarriosModule,
    BibliotecaModule,
    ComisionesModule,
    ContratosMenoresModule,
    DelegacionesModule,
    DeudaModule,
    EconomicosModule,
    EntesModule,
    EnteModule,
    HemerotecaModule,
    LegislacionModule,
    LicitacionesModule,
    OrganicosModule,
    OrganosContratacionModule,
    PmpModule,
    PresupuestoCapitulosModule,
    PresupuestoModificacionesModule,
    PresupuestosModule,
    ProgramasModule,
    SubvencionesModule,
    TemasModule,
  ],
})
export class EntitiesModule {}
