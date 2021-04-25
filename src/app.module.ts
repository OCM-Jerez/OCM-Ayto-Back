import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { EnteModule } from './ente/ente.module';

@Module({
  imports: [TypeOrmModule.forRoot(), EnteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
