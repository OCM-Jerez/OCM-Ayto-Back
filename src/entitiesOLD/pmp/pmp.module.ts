import { Module } from '@nestjs/common';
import { PmpService } from './pmp.service';
import { PmpController } from './pmp.controller';

@Module({
  controllers: [PmpController],
  providers: [PmpService]
})
export class PmpModule {}
