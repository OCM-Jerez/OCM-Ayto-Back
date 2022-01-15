import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OrganoContratacionService } from './organo-contratacion.service';
import { OrganoContratacionController } from './organo-contratacion.controller';
import { OrganoContratacionRepository } from './organo-contratacion.repository';


@Module({
  imports: [TypeOrmModule.forFeature([OrganoContratacionRepository])],
  controllers: [OrganoContratacionController],
  providers: [OrganoContratacionService]
})
export class OrganoContratacionModule { }
