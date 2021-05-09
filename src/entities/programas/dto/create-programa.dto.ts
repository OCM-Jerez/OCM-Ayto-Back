// Mapped types
// https://docs.nestjs.com/openapi/mapped-types?fbclid=IwAR2lfZslP5p624l5vOFn4JzHM3hNJFDoQkgimSWbhXNljM9HJQLHvaYIQzE

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

import { IsNotEmpty, IsString, IsDate } from 'class-validator';
export class CreateProgramaDto {
  // Estos campos lo hereda de base.entity, pero es necesario añadirlos al DTO.
  @IsString()
  id: string;

  @IsString()
  createdBy: string;

  @IsNotEmpty()
  @IsString()
  lastModifiedBy: string;

  //   @ApiProperty()
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

  @IsDate()
  proCreatedDate: Date;

  @IsDate()
  proDeletedDate: Date;

  @IsString()
  uso: string;

  @IsString()
  observaciones: string;

  @IsString()
  codOrg: string;
}
