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

import { IsNotEmpty, IsString, IsDate, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProgramaDto {
  // Estos campos los hereda de base.entity, pero es necesario añadirlos al DTO.
  
  // El id lo genera automaticamente.
  // @IsString()
  // id: string;

  @IsString()
  createdBy: string;

  @IsNotEmpty()
  @IsString()
  lastModifiedBy: string;

  // @ApiProperty()
  @IsNotEmpty()
  @IsString()
  codPro: string;

  @IsString()
  descripcionAyto: string;

  @IsNotEmpty()
  @IsString()
  descripcionOCM: string;

  @IsString()
  WebOCM: string;

  @ApiProperty({
    description:
      'Fecha en la que se incorpora este programa a la contabilidad del Ayuntamiento',
    required: false,
  })
  // Con @IsDate da error.
  @IsDateString()	
  proCreatedDate: Date;

  @ApiProperty({
    description:
      'Fecha en la que se elimina este programa de la contabilidad del Ayuntamiento',
    required: false,
  })
  @IsDateString()
  proDeletedDate: Date;

  @ApiProperty({
    description: 'Ampliación información del uso de programa',
    required: false,
  })
  @IsString()
  uso: string;

  @IsString()
  observaciones: string;

  @IsString()
  codOrg: string;
}
