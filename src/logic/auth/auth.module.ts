import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

// import { JWT_SECRET } from '../config/constants';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
// import { UserModule } from 'src/entities/user/user.module';
import { LocalStrategy, JwtStrategy } from './strategies';
import { JWT_SECRET } from 'src/config/constants';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    PassportModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>(JWT_SECRET),
        signOptions: { expiresIn: '24h' },
      }),
    }),
    UsersModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule { }