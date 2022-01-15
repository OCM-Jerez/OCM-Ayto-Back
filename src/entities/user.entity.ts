import { hash } from 'bcryptjs';
import { Entity, Column, BeforeInsert, BeforeUpdate } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('user')
export class User extends BaseEntity {
    @Column({ type: 'varchar', length: 20, nullable: false })
    login: string;

    // Con select: false, no se muestra en la respuesta
    // @Column({ type: 'varchar', length: 255, nullable: false, select: false })
    @Column({ type: 'varchar', length: 255, nullable: false })
    password: string;
    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword() {
        if (!this.password) {
            return;
        }
        this.password = await hash(this.password, 10);
        // console.log(this.password.length);
    }

    @Column({ type: 'varchar', length: 20, nullable: false })
    email: string;


}
