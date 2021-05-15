import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';

@Entity('barrio')
export class Barrio extends BaseEntity {
  @Column({ type: 'varchar', length: 255, nullable: true })
  nombre: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  distrito: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  WebOCM: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  observacion: string;
}
