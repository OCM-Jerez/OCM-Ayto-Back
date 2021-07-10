import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';

@Entity('delegacion')
export class Delegacion extends BaseEntity {
    @Column({ type: 'varchar', length: 255, nullable: true })
    nombre: string;

    @Column({ type: 'varchar', length: 50, nullable: true })
    mandato: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    WebOCM: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    observacion: string;
}
