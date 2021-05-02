// import { Module } from '@nestjs/common';
// import { EntesService } from './entes.service';
// import { EntesController } from './entes.controller';

// @Module({
//   controllers: [EntesController],
//   providers: [EntesService]
// })
// export class EntesModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Ente } from '../entes/entities/ente.entity';
import { EntesController } from './entes.controller';
import { EntesService } from './entes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Ente])],
  controllers: [EntesController],
  providers: [EntesService],
})
export class EntesModule {}

