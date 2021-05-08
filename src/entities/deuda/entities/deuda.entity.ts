import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';

@Entity('deuda')
export class Deuda extends BaseEntity {}
