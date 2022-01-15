import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

import { BaseEntity } from '../../../entities/base.entity';

export class CreateSeccionCensalDto extends BaseEntity {

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
