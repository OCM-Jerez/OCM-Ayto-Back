import {
    IsNotEmpty,
    IsString,
    IsDateString,
    IsUrl,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../../entities/base.entity';

export class CreateEconomicoDto extends BaseEntity {
    @IsNotEmpty()
    @IsString()
    readonly codEco: string;

    @IsString()
    readonly descripcionAyto: string;

    @IsNotEmpty()
    @IsString()
    readonly descripcionOCM: string;

    @IsUrl()
    readonly WebOCM: string;

    @ApiProperty({
        description:
            'Fecha en la que se incorpora este programa a la contabilidad del Ayuntamiento',
        required: false,
    })
    // Con @IsDate da error.
    @IsDateString()
    readonly ecoCreatedDate: Date;

    @ApiProperty({
        description:
            'Fecha en la que se elimina este programa de la contabilidad del Ayuntamiento',
        required: false,
    })
    @IsDateString()
    readonly ecoDeletedDate: Date;

    @ApiProperty({
        description: 'Ampliación información del uso de programa',
        required: false,
    })
    @IsString()
    readonly uso: string;

    @IsString()
    readonly observaciones: string;
}
