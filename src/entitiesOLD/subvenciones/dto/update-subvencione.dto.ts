import { PartialType } from '@nestjs/mapped-types';
import { CreateSubvencioneDto } from './create-subvencione.dto';

export class UpdateSubvencioneDto extends PartialType(CreateSubvencioneDto) {}
