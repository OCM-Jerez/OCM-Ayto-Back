import { Module } from '@nestjs/common';
import { OrganosContratacionService } from './organos-contratacion.service';
import { OrganosContratacionController } from './organos-contratacion.controller';

@Module({
  controllers: [OrganosContratacionController],
  providers: [OrganosContratacionService]
})
export class OrganosContratacionModule {}
