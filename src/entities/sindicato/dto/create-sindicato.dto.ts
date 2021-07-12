import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

import { BaseEntity } from '../../base/base.entity';

export class CreateSindicatoDto extends BaseEntity {

    @IsNotEmpty()
    @IsString()
    readonly nombre: string;

    @ApiProperty({
        default: 'ocmjerez.org',
    })
    @IsUrl()
    readonly WebOCM: string;

    @IsNotEmpty()
    @IsString()
    readonly observacion: string;
}

