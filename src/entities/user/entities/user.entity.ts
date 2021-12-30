import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';

@Entity('user')
export class User extends BaseEntity {
    @Column({ type: 'varchar', length: 255, nullable: true })
    login: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    password: string;

}
