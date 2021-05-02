import { Module } from '@nestjs/common';
import { EconomicosService } from './economicos.service';
import { EconomicosController } from './economicos.controller';

@Module({
  controllers: [EconomicosController],
  providers: [EconomicosService]
})
export class EconomicosModule {}
