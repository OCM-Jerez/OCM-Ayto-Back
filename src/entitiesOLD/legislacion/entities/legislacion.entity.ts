import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../../entities/base.entity';

@Entity('legislacion')
export class Legislacion extends BaseEntity { }
