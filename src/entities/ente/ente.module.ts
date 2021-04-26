import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Ente } from '../ente/ente.entity';
import { EnteController } from './ente.controller';
import { EnteService } from './ente.service';

@Module({
  imports: [TypeOrmModule.forFeature([Ente])],
  controllers: [EnteController],
  providers: [EnteService],
})
export class EnteModule {}
