import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../../entities/base.entity';

@Entity('organoContratacion')
export class OrganoContratacion extends BaseEntity {
    @Column({ type: 'varchar', length: 255, nullable: true })
    nombre: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    WebOCM: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    observacion: string;
}
