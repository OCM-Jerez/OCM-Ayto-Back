import { PartialType } from '@nestjs/mapped-types';
import { CreateOrganicoDto } from './create-organico.dto';

export class UpdateOrganicoDto extends PartialType(CreateOrganicoDto) {}
