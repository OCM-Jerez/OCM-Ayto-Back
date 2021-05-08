import { PartialType } from '@nestjs/mapped-types';
import { CreateOrganosContratacionDto } from './create-organos-contratacion.dto';

export class UpdateOrganosContratacionDto extends PartialType(CreateOrganosContratacionDto) {}
