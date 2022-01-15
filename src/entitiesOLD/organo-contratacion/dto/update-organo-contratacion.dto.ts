import { PartialType } from '@nestjs/mapped-types';
import { CreateOrganoContratacionDto } from './create-organo-contratacion.dto';

export class UpdateOrganoContratacionDto extends PartialType(CreateOrganoContratacionDto) {}
