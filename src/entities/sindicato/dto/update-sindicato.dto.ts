import { PartialType } from '@nestjs/mapped-types';
import { CreateSindicatoDto } from './create-sindicato.dto';

export class UpdateSindicatoDto extends PartialType(CreateSindicatoDto) {}
