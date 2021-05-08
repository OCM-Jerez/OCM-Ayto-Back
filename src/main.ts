import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { initSwagger } from './app.swagger';

import { AppModule } from './app.module';
import { SERVER_PORT } from './config/constants';
import { generateTypeormConfigFile } from './scripts';

async function bootstrap() {
  const appOptions = { cors: true };
  const app = await NestFactory.create(AppModule, appOptions);
  const logger = new Logger('Bootstrap');
  const config = app.get(ConfigService);
  const port = parseInt(config.get<string>(SERVER_PORT), 10) || 3000;

  initSwagger(app);
  generateTypeormConfigFile(config);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  app.setGlobalPrefix('/api/v1');
  await app.listen(port);
  logger.log(`Server is running at ${await app.getUrl()}`);
}

bootstrap();
