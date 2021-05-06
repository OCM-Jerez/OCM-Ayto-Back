import { PartialType } from '@nestjs/mapped-types';
import { CreatePresupuestoModificacioneDto } from './create-presupuesto-modificacione.dto';

export class UpdatePresupuestoModificacioneDto extends PartialType(CreatePresupuestoModificacioneDto) {}
