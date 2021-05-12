/*
 CLI Plugin
Usando este plugin no hace falta usar  @ApiProperty() en  cada campo
para que Swagger genere el DTO
https://docs.nestjs.com/openapi/cli-plugin
import { ApiProperty } from '@nestjs/swagger';
*/

/*
Validaciones
https://docs.nestjs.com/techniques/validation
https://github.com/typestack/class-validator#validation-decorators
*/

import {
  IsNotEmpty,
  IsString,
  IsDate,
  IsDateString,
  IsUrl,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProgramaDto {
  // Estos campos los hereda de base.entity, pero es necesario añadirlos al DTO.

  // El id lo genera automaticamente.
  // @IsString()
  // id: string;

  @IsString()
  readonly createdBy: string;

  @IsNotEmpty()
  @IsString()
  readonly lastModifiedBy: string;

  // @ApiProperty()
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
