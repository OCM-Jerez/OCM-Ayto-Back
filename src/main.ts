import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { initSwagger } from './app.swagger';

import { SERVER_PORT } from './config/constants';
import { generateTypeormConfigFile } from './scripts';
import { GlobalExceptionFilter } from './common/filters/global-exception.filter';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { NotFoundInterceptor } from './common/interceptors/NotFound.Interceptor';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const appOptions = { cors: true, logger: true };
  const app = await NestFactory.create(AppModule, appOptions);
  const logger = new Logger('Bootstrap');
  const config = app.get(ConfigService);
  const port = parseInt(config.get<string>(SERVER_PORT), 10) || 3000;

  generateTypeormConfigFile(config);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Si se envia algún campo que no existe lo ignora en el payload.
      forbidNonWhitelisted: true, // Si se envia algún campo que no existe lanza error.
    }),
  );

  // const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.useGlobalInterceptors(new NotFoundInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());
  // app.useGlobalFilters(new GlobalExceptionFilter());

  app.setGlobalPrefix('/api/v1');
  initSwagger(app);

  await app.listen(port);
  logger.log(`Server is running at ${await app.getUrl()}`);
}

bootstrap();
