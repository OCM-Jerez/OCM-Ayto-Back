import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../../entities/base.entity';

@Entity('biblioteca')
export class Biblioteca extends BaseEntity { }
