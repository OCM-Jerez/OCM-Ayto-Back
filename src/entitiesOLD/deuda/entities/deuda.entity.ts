import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../../entities/base.entity';

@Entity('deuda')
export class Deuda extends BaseEntity { }
