import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DelegacionService } from './delegacion.service';
import { DelegacionController } from './delegacion.controller';
import { DelegacionRepository } from './delegacion.repository';

@Module({
  imports: [TypeOrmModule.forFeature([DelegacionRepository])],
  controllers: [DelegacionController],
  providers: [DelegacionService]
})
export class DelegacionModule { }
