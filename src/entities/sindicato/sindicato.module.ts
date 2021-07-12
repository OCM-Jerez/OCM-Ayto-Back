import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SindicatoService } from './sindicato.service';
import { SindicatoController } from './sindicato.controller';
import { SindicatoRepository } from './sindicato.repository';


@Module({
  imports: [TypeOrmModule.forFeature([SindicatoRepository])],
  controllers: [SindicatoController],
  providers: [SindicatoService]
})
export class SindicatoModule { }
