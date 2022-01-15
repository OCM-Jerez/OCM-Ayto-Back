import {
    IsNotEmpty,
    IsString,
    IsDateString,
    IsUrl,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../../entities/base.entity';

export class CreateOrganicoDto extends BaseEntity {
    @IsNotEmpty()
    @IsString()
    readonly codOrg: string;

    @IsString()
    readonly descripcionAyto: string;

    @IsNotEmpty()
    @IsString()
    readonly descripcionOCM: string;

    @IsUrl()
    readonly WebOCM: string;

    @ApiProperty({
        description:
            'Fecha en la que se incorpora este organico a la contabilidad del Ayuntamiento',
        required: false,
    })
    // Con @IsDate da error.
    @IsDateString()
    readonly orgCreatedDate: Date;

    @ApiProperty({
        description:
            'Fecha en la que se elimina este organico de la contabilidad del Ayuntamiento',
        required: false,
    })
    @IsDateString()
    readonly orgDeletedDate: Date;

    @IsString()
    readonly observaciones: string;
}
