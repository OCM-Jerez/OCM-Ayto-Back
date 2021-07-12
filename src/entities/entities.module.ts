import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';

import { BarriosModule } from './barrios/barrios.module';
import { BibliotecaModule } from './biblioteca/biblioteca.module';
import { ComisionesModule } from './comisiones/comisiones.module';
import { ContratosMenoresModule } from './contratos-menores/contratos-menores.module';
import { DelegacionModule } from './delegaciones/delegacion.module';
import { DeudaModule } from './deuda/deuda.module';
import { EconomicosModule } from './economicos/economicos.module';
import { HemerotecaModule } from './hemeroteca/hemeroteca.module';
import { LegislacionModule } from './legislacion/legislacion.module';
import { LicitacionesModule } from './licitaciones/licitaciones.module';
import { LicitacionesLoteModule } from './licitaciones-lotes/licitacione-lote.module';
import { OrganicosModule } from './organicos/organicos.module';
import { PmpModule } from './pmp/pmp.module';
import { PresupuestoCapitulosModule } from './presupuesto-capitulos/presupuesto-capitulos.module';
import { PresupuestoModificacionesModule } from './presupuesto-modificaciones/presupuesto-modificaciones.module';
import { PresupuestosModule } from './presupuestos/presupuestos.module';
import { ProgramasModule } from './programas/programas.module';
import { SubvencionesModule } from './subvenciones/subvenciones.module';
import { TemasModule } from './temas/temas.module';
import { EcoIngresosModule } from './eco-ingresos/eco-ingresos.module';
import { CapituloIngresoModule } from './capitulo-ingreso/capitulo-ingreso.module';
import { CapituloGastoModule } from './capitulo-gasto/capitulo-gasto.module';
import { DistritoModule } from './distrito/distrito.module';
import { EnteModule } from './ente/ente.module';
import { OrganoContratacionModule } from './organo-contratacion/organo-contratacion.module';
import { SeccionCensalModule } from './seccion-censal/seccion-censal.module';
import { SindicatoModule } from './sindicato/sindicato.module';

@Module({
  imports: [
    // TypeOrmModule.forFeature([BarriosModule]),
    BarriosModule,
    BibliotecaModule,
    ComisionesModule,
    ContratosMenoresModule,
    DelegacionModule,
    DeudaModule,
    EconomicosModule,
    HemerotecaModule,
    LegislacionModule,
    LicitacionesModule,
    LicitacionesLoteModule,
    OrganicosModule,
    PmpModule,
    PresupuestoCapitulosModule,
    PresupuestoModificacionesModule,
    PresupuestosModule,
    ProgramasModule,
    SubvencionesModule,
    TemasModule,
    EcoIngresosModule,
    CapituloIngresoModule,
    CapituloGastoModule,
    DistritoModule,
    EnteModule,
    OrganoContratacionModule,
    SeccionCensalModule,
    SindicatoModule,
  ],
})
export class EntitiesModule { }
