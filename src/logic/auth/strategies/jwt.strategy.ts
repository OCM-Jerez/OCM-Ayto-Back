import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';

import { ExtractJwt, Strategy } from 'passport-jwt';

import { JWT_SECRET } from 'src/config/constants';
import { UsersService } from 'src/logic/users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private usersService: UsersService, private config: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: config.get<string>(JWT_SECRET),
        });
    }

    async validate(payload: any) {
        // console.log('payload', payload);
        const { id: id } = payload;
        // console.log('payload destructurado', id);
        return await this.usersService.getOne(id);
    }
}