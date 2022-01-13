import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

import { BaseEntity } from '../../base';

export class CreateUserDto extends BaseEntity {
    @IsNotEmpty()
    @IsString()
    readonly login: string;

    @IsString()
    readonly password: string;

    // @IsEmail()
    // @IsString()
    // email: string;

}
