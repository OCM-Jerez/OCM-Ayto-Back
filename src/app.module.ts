import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
// import { AccessControlModule } from 'nest-access-control';
import * as Joi from 'joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TYPEORM_CONFIG } from './config/constants';
import databaseConfig from './config/database.config';

import { BarriosModule } from './entities/barrios/barrios.module';
import { BibliotecaModule } from './entities/biblioteca/biblioteca.module';
import { ComisionesModule } from './entities/comisiones/comisiones.module';
import { ContratosMenoresModule } from './entities/contratos-menores/contratos-menores.module';
import { DelegacionesModule } from './entities/delegaciones/delegaciones.module';
import { DeudaModule } from './entities/deuda/deuda.module';
import { EconomicosModule } from './entities/economicos/economicos.module';
import { EnteModule } from './entities/ente/ente.module';
import { EntesModule } from './entities/entes/entes.module';
import { HemerotecaModule } from './entities/hemeroteca/hemeroteca.module';
import { LegislacionModule } from './entities/legislacion/legislacion.module';
import { LicitacionesModule } from './entities/licitaciones/licitaciones.module';
import { OrganicosModule } from './entities/organicos/organicos.module';
import { OrganosContratacionModule } from './entities/organos-contratacion/organos-contratacion.module';
import { PmpModule } from './entities/pmp/pmp.module';
import { PresupuestoCapitulosModule } from './entities/presupuesto-capitulos/presupuesto-capitulos.module';
import { PresupuestoModificacionesModule } from './entities/presupuesto-modificaciones/presupuesto-modificaciones.module';
import { PresupuestosModule } from './entities/presupuestos/presupuestos.module';
import { ProgramasModule } from './entities/programas/programas.module';
import { SubvencionesModule } from './entities/subvenciones/subvenciones.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) =>
        config.get<TypeOrmModuleOptions>(TYPEORM_CONFIG),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`, // .env.development
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production')
          .default('development'),
      }),
    }),
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
