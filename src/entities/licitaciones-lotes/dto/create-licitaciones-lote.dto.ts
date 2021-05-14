import {
  IsNotEmpty,
  IsString,
  IsDate,
  IsDateString,
  IsUrl,
  IsPositive,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLicitacionesLoteDto {
  @IsNotEmpty()
  @IsPositive()
  readonly numero: number;

  @IsNotEmpty()
  @IsString()
  readonly descripcion: string;

  @IsDateString()
  readonly fechaAdjudicacion: Date;

  @IsString()
  readonly adjudicatario: string;

  @IsString()
  readonly observaciones: string;

  // Foreing Key
  @IsNotEmpty()
  @IsString()
  readonly licitacioneId: string;
}
