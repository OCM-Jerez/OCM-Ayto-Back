import { Module } from '@nestjs/common';
import { OrganicosService } from './organicos.service';
import { OrganicosController } from './organicos.controller';

@Module({
  controllers: [OrganicosController],
  providers: [OrganicosService]
})
export class OrganicosModule {}
