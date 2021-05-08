import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';

@Entity('presupuesto')
export class Presupuesto extends BaseEntity {}
