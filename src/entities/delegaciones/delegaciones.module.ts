import { Module } from '@nestjs/common';
import { DelegacionesService } from './delegaciones.service';
import { DelegacionesController } from './delegaciones.controller';

@Module({
  controllers: [DelegacionesController],
  providers: [DelegacionesService]
})
export class DelegacionesModule {}
