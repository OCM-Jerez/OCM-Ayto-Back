import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';

@Entity('biblioteca')
export class Biblioteca extends BaseEntity {}
