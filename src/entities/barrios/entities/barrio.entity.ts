import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';

@Entity('barrio')
export class Barrio extends BaseEntity {}
