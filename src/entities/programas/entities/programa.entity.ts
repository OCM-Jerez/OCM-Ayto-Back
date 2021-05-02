import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';

@Entity('programa')
export class Programa extends BaseEntity {
  @Column({ type: 'varchar', length: 10, nullable: false })
  codPro!: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  descripcionAyto!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  descripcionOCM!: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  WebOCM!: string;

  @Column({ type: 'varchar', length: 4, nullable: true  })
  Created!: Date;

  @Column({ type: 'varchar', length: 4, nullable: true  })
  Deleted: Date;

  @Column({ type: 'varchar', length: 255, nullable: true  })
  uso: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  observaciones: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  codOrg!: string;

}

