import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EconomicosService } from './economicos.service';
import { EconomicosController } from './economicos.controller';
import { EconomicoRepository } from '../../repositories/economico.repository';

@Module({
  imports: [TypeOrmModule.forFeature([EconomicoRepository])],
  controllers: [EconomicosController],
  providers: [EconomicosService]
})
export class EconomicosModule { }
