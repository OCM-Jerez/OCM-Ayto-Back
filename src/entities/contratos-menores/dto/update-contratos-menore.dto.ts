import { PartialType } from '@nestjs/mapped-types';
import { CreateContratosMenoreDto } from './create-contratos-menore.dto';

export class UpdateContratosMenoreDto extends PartialType(CreateContratosMenoreDto) {}
