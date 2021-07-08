import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';

@Entity('organico')
export class Organico extends BaseEntity {
    @Column({ type: 'varchar', length: 10, nullable: false })
    codOrg: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    descripcionAyto: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    descripcionOCM: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    WebOCM: string;

    @Column({ nullable: true })
    orgCreatedDate: Date;

    @Column({ nullable: true })
    orgDeletedDate: Date;

    @Column({ type: 'varchar', length: 255, nullable: true })
    observaciones: string;

}
