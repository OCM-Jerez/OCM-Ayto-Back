import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../../entities/base.entity';

@Entity('presupuesto_capitulo')
export class PresupuestoCapitulo extends BaseEntity { }
