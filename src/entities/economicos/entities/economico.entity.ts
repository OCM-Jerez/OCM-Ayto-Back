import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';

@Entity('economico')
export class Economico extends BaseEntity {
  @Column({ type: 'varchar', length: 10, nullable: false })
  codEco: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  descripcionAyto: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  descripcionOCM: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  WebOCM: string;

  @Column({ type: 'varchar', length: 4, nullable: true })
  ecoCreatedDate: Date;

  @Column({ type: 'varchar', length: 4, nullable: true })
  ecoDeletedDate: Date;

  @Column({ type: 'varchar', length: 255, nullable: true })
  uso: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  observaciones: string;

}

