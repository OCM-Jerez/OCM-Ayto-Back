import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserService } from 'src/entities/user/user.service';
import { JWT_SECRET } from 'src/config/constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private userService: UserService, private config: ConfigService) {
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
        return await this.userService.getOne(id);
    }
}