// export class Licitacione {}

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('licitacion')
export class Licitacione {
  @PrimaryGeneratedColumn()
  ente_id: number;

  @Column({ type: 'varchar', length: 45, nullable: false })
  nombre!: string;

  @Column({ type: 'varchar', length: 45 })
  tipo!: string;

  @Column({ type: 'varchar', length: 45 })
  createdBy: string;
}
