import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SeccionCensalService } from './seccion-censal.service';
import { SeccionCensalController } from './seccion-censal.controller';
import { SeccionCensalRepository } from './seccion-censal.repository';


@Module({
  imports: [TypeOrmModule.forFeature([SeccionCensalRepository])],
  controllers: [SeccionCensalController],
  providers: [SeccionCensalService]
})
export class SeccionCensalModule { }
