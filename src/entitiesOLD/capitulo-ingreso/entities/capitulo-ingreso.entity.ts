import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../../entities/base.entity';

@Entity('capituloIngreso')
export class CapituloIngreso extends BaseEntity {
    @Column({ type: 'varchar', length: 10, nullable: false })
    codCap: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    descripcionAyto: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    descripcionOCM: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    WebOCM: string;

    @Column({ type: 'varchar', length: 4, nullable: true })
    capCreatedDate: Date;

    @Column({ type: 'varchar', length: 4, nullable: true })
    capDeletedDate: Date;

    @Column({ type: 'varchar', length: 255, nullable: true })
    uso: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    observaciones: string;

}

