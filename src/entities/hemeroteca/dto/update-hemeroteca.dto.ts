import { PartialType } from '@nestjs/mapped-types';
import { CreateHemerotecaDto } from './create-hemeroteca.dto';

export class UpdateHemerotecaDto extends PartialType(CreateHemerotecaDto) {}
