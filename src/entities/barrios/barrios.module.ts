import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BarriosService } from './barrios.service';
import { BarriosController } from './barrios.controller';
import { BarrioRepository } from './barrio.repository';

@Module({
  imports: [TypeOrmModule.forFeature([BarrioRepository])],
  controllers: [BarriosController],
  providers: [BarriosService],
})
export class BarriosModule {}
