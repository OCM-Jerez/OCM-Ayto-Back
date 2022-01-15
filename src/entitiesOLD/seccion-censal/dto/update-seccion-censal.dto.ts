import { PartialType } from '@nestjs/mapped-types';
import { CreateSeccionCensalDto } from './create-seccion-censal.dto';

export class UpdateSeccionCensalDto extends PartialType(CreateSeccionCensalDto) {}
