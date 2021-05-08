import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';

@Entity('organo_contratacion')
export class OrganosContratacion extends BaseEntity {
  @Column({ type: 'varchar', length: 120, nullable: false })
  nombre!: string;
}
