import { PartialType } from '@nestjs/mapped-types';
import { CreatePresupuestoCapituloDto } from './create-presupuesto-capitulo.dto';

export class UpdatePresupuestoCapituloDto extends PartialType(CreatePresupuestoCapituloDto) {}
