import { PartialType } from '@nestjs/mapped-types';
import { CreateEcoIngresoDto } from './create-eco-ingreso.dto';

export class UpdateEcoIngresoDto extends PartialType(CreateEcoIngresoDto) {}
