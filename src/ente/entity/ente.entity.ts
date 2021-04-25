import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  UpdateDateColumn,
} from 'typeorm';
// import { User } from 'src/user/entities';

@Entity('ente')
export class Ente {
  @PrimaryGeneratedColumn()
  ente_id: number;

  @Column({ type: 'varchar', length: 45, nullable: false })
  nombre!: string;

  @Column({ type: 'varchar', length: 45 })
  tipo!: string;

  @Column({ type: 'varchar', length: 45 })
  codeHacienda!: string;

  
//   @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
//   createdAt: Date;

  // @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  // updatedAt: Date;

//   @ManyToOne(() => User, (user) => user.posts, { eager: true })
//   @JoinColumn({ name: 'author' })
//   author: User;
}






// {
//   "nombre": "ddd",
//   "codeHacienda": "ddd",
//   "tipo": "TECHNOLOGY"
//   }