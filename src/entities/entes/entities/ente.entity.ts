import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BaseEntity } from '../../base/base.entity';

@Entity('ente')
@Entity('ente')
export class Ente  extends BaseEntity {
  @PrimaryGeneratedColumn()
  ente_id: number;

  @Column({ type: 'varchar', length: 45, nullable: false })
  nombre!: string;

  @Column({ type: 'varchar', length: 45 })
  tipo!: string;

  @Column({ type: 'varchar', length: 255 })
  WEB: string;

  @Column({ type: 'varchar', length: 45 })
  createdBy: string;

  @Column({ type: 'varchar', length: 45 })
  updatedBy: string;

  @Column({ type: 'varchar', length: 45 })
  updatedBy1: string;

  @Column({ type: 'varchar', length: 45 })
  updatedBy2: string;

  @Column({ type: 'varchar', length: 45 })
  updatedBy3: string;

  @Column({ type: 'varchar', length: 45 })
  prueba: string;
}

// {
//   "nombre": "ddd",
//   "codeHacienda": "ddd",
//   "tipo": "TECHNOLOGY"
//   }
