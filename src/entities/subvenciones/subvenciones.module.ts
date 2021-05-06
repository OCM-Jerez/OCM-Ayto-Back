import { Module } from '@nestjs/common';
import { SubvencionesService } from './subvenciones.service';
import { SubvencionesController } from './subvenciones.controller';

@Module({
  controllers: [SubvencionesController],
  providers: [SubvencionesService]
})
export class SubvencionesModule {}
