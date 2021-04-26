// import { PartialType, OmitType } from '@nestjs/swagger';
import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreateEnteDto } from './create-ente.dto';

export class EditEnteDto extends PartialType(
  OmitType(CreateEnteDto, ['codeHacienda'] as const),
) {}