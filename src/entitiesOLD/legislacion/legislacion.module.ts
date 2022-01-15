import { Module } from '@nestjs/common';
import { LegislacionService } from './legislacion.service';
import { LegislacionController } from './legislacion.controller';

@Module({
  controllers: [LegislacionController],
  providers: [LegislacionService]
})
export class LegislacionModule {}
