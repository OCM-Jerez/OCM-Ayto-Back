import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export const initSwagger = (app: INestApplication) => {
  const swaggerConfig = new DocumentBuilder()
    .setTitle('OCM_Ayto API')
    .addBearerAuth()
    // .setBasePath('/api/v1')
    .setDescription(
      'Tablas relacionadas con el funcionamiento del Ayuntamiento de Jerez',
    )
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/docs', app, document);
};