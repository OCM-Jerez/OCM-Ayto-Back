import {
  IsNotEmpty,
  IsString,
  IsDate,
  IsDateString,
  IsUrl,
  IsPositive,
  IsNumber,
} from 'class-validator';
// import { ApiProperty } from '@nestjs/swagger';

import { BaseEntity } from '../../base/base.entity';


export class CreateLicitacioneDto extends BaseEntity {
  // @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly year: string;

  // @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly expediente: string;

  @IsDateString()
  readonly fechaAnuncio: Date;

  @IsDateString()
  readonly fechaPresentacionOfertas: Date;

  @IsNotEmpty()
  @IsString()
  readonly organoContratacion: string;

  @IsNotEmpty()
  @IsNumber()
  readonly licitadoresPresentados: number;

  @IsNotEmpty()
  @IsString()
  readonly estado: string;

  @IsNotEmpty()
  @IsString()
  readonly objeto: string;

  @IsNotEmpty()
  @IsNumber()
  readonly presupuestoBase: number;

  @IsNotEmpty()
  @IsNumber()
  readonly valorEstimado: number;

  @IsNotEmpty()
  @IsNumber()
  readonly importeAdjudicacion: number;

  @IsNotEmpty()
  @IsNumber()
  readonly IVA: number;

  @IsNotEmpty()
  @IsString()
  readonly tipoContrato: string;

  @IsNotEmpty()
  @IsNumber()
  readonly codigoCPV: number;

  @IsNotEmpty()
  @IsString()
  readonly procedimientoContratacion: string;

  @IsNotEmpty()
  @IsString()
  readonly resultado: string;

  @IsNotEmpty()
  @IsString()
  readonly URL: string;



}
