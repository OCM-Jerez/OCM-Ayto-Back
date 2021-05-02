import { PartialType } from '@nestjs/mapped-types';
import { CreateEconomicoDto } from './create-economico.dto';

export class UpdateEconomicoDto extends PartialType(CreateEconomicoDto) {}
