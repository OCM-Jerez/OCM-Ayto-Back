import { PartialType } from '@nestjs/mapped-types';
import { CreateDelegacioneDto } from './create-delegacione.dto';

export class UpdateDelegacioneDto extends PartialType(CreateDelegacioneDto) {}
