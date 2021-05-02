// import { PartialType } from '@nestjs/mapped-types';
// import { CreateEnteDto } from './create-ente.dto';

// export class UpdateEnteDto extends PartialType(CreateEnteDto) {}


// import { PartialType, OmitType } from '@nestjs/swagger';
import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreateEnteDto } from './create-ente.dto';

export class UpdateEnteDto extends PartialType(
  OmitType(CreateEnteDto, ['codeHacienda'] as const),
) {}
