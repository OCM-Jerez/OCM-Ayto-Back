import { PartialType } from '@nestjs/mapped-types';
import { CreateLegislacionDto } from './create-legislacion.dto';

export class UpdateLegislacionDto extends PartialType(CreateLegislacionDto) {}
