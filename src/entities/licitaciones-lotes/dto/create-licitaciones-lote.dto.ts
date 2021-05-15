import {
  IsNotEmpty,
  IsString,
  IsDateString,
  IsNumber,
  IsPositive,
} from 'class-validator';
export class CreateLicitacionesLoteDto {
  @IsNotEmpty()
  @IsNumber()
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
