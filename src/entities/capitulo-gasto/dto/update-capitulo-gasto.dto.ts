import { PartialType } from '@nestjs/mapped-types';
import { CreateCapituloGastoDto } from './create-capitulo-gasto.dto';

export class UpdateCapituloGastoDto extends PartialType(CreateCapituloGastoDto) {}
