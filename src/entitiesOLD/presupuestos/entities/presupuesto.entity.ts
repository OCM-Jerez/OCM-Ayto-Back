import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../../entities/base.entity';

@Entity('presupuesto')
export class Presupuesto extends BaseEntity { }
