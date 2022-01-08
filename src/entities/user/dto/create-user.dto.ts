import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

import { BaseEntity } from '../../base/base.entity';

export class CreateUserDto extends BaseEntity {
    @IsNotEmpty()
    @IsString()
    readonly login: string;

    @IsString()
    readonly password: string;

    // @IsEmail()
    // email: string;

}
