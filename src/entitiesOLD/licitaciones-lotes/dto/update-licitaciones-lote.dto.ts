import { PartialType } from '@nestjs/mapped-types';
import { CreateLicitacionesLoteDto } from './create-licitaciones-lote.dto';

export class UpdateLicitacionesLoteDto extends PartialType(
  CreateLicitacionesLoteDto,
) {}
