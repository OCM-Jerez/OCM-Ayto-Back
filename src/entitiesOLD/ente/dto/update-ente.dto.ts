import { PartialType } from '@nestjs/mapped-types';
import { CreateEnteDto } from './create-ente.dto';

export class UpdateEnteDto extends PartialType(CreateEnteDto) {}
