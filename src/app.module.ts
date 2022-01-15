import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
// import { AccessControlModule } from 'nest-access-control';
import * as Joi from 'joi';

// import { AppMiddleware } from './common/middleware/app.middleware';
import { AuthModule } from './logic/auth/auth.module';
import { EntitiesModule } from './entitiesOLD/entities.module';
import { LoginModule } from './logic/auth/login/login.module';
import { TYPEORM_CONFIG } from './config/constants';
import databaseConfig from './config/database.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) =>
        config.get<TypeOrmModuleOptions>(TYPEORM_CONFIG),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`, // .env.development
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production')
          .default('development'),
      }),
    }),
    EntitiesModule,
    AuthModule,
    LoginModule,
  ],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(AppMiddleware)
  //     .forRoutes({ path: '*', method: RequestMethod.ALL });
  // }
}
