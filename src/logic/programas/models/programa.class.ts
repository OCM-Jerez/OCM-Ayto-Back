
import {
    IsNotEmpty,
    IsString,
    IsDate,
    IsDateString,
    IsUrl,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProgramaDto {

    @IsNotEmpty()
    @IsString()
    readonly codPro: string;

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
    readonly proCreatedDate: Date;

    @ApiProperty({
        description:
            'Fecha en la que se elimina este programa de la contabilidad del Ayuntamiento',
        required: false,
    })
    @IsDateString()
    readonly proDeletedDate: Date;

    @ApiProperty({
        description: 'Ampliación información del uso de programa',
        required: false,
    })
    @IsString()
    readonly uso: string;

    @IsString()
    readonly observaciones: string;

    @IsString()
    readonly codOrg: string;
}
