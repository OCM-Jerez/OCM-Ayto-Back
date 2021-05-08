import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';

@Entity('presupuesto_capitulo')
export class PresupuestoCapitulo extends BaseEntity {}
