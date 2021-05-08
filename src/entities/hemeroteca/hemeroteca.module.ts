import { Module } from '@nestjs/common';
import { HemerotecaService } from './hemeroteca.service';
import { HemerotecaController } from './hemeroteca.controller';

@Module({
  controllers: [HemerotecaController],
  providers: [HemerotecaService]
})
export class HemerotecaModule {}
