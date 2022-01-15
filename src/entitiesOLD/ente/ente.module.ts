import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EnteService } from './ente.service';
import { EnteController } from './ente.controller';
import { EnteRepository } from './ente.repository';


@Module({
  imports: [TypeOrmModule.forFeature([EnteRepository])],
  controllers: [EnteController],
  providers: [EnteService]
})
export class EnteModule { }
