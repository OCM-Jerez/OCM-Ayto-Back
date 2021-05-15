import {
  IsNotEmpty,
  IsString,
  IsDateString,
  IsUrl,
  IsPositive,
  IsNumber,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { BaseEntity } from '../../base/base.entity';

export class CreateLicitacioneDto extends BaseEntity {
  @ApiProperty({
    default: '2021',
  })
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
  @IsPositive()
  readonly licitadoresPresentados: number;

  @IsNotEmpty()
  @IsString()
  readonly estado: string;

  @IsNotEmpty()
  @IsString()
  readonly objeto: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly presupuestoBase: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly valorEstimado: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly importeAdjudicacion: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly IVA: number;

  @IsNotEmpty()
  @IsString()
  readonly tipoContrato: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly codigoCPV: number;

  @IsNotEmpty()
  @IsString()
  readonly procedimientoContratacion: string;

  @IsNotEmpty()
  @IsString()
  readonly resultado: string;

  @ApiProperty({
    default: 'ocmjerez.org',
  })
  @IsNotEmpty()
  @IsUrl()
  readonly URL: string;
}
