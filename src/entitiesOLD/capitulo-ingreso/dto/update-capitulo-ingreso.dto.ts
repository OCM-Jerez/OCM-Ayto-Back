import { PartialType } from '@nestjs/mapped-types';
import { CreateCapituloIngresoDto } from './create-capitulo-ingreso.dto';

export class UpdateCapituloIngresoDto extends PartialType(CreateCapituloIngresoDto) {}
