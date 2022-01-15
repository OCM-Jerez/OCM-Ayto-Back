import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OrganicosService } from './organicos.service';
import { OrganicosController } from './organicos.controller';
import { OrganicoRepository } from './organico.repository';

@Module({
  imports: [TypeOrmModule.forFeature([OrganicoRepository])],
  controllers: [OrganicosController],
  providers: [OrganicosService]
})
export class OrganicosModule { }
