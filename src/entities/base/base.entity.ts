import {
  ObjectIdColumn,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
// import { ApiModelProperty } from '@nestjs/swagger';

export abstract class BaseEntity {
  @ObjectIdColumn()
  @PrimaryGeneratedColumn('uuid')
  // @ApiModelProperty({ example: '66ed8031-d40e-4f30-8ae4-8bf5c2ca87ff', description: 'Entity id' })
  id?: string;

  @Column({ type: 'varchar', length: 36, default: 'mam', nullable: true })
  createdBy?: string;

  // https://typeorm.io/#/decorator-reference/createdatecolumn
  @CreateDateColumn()
  createdDate?: Date;

  @Column({ type: 'varchar', length: 36, default: 'mam', nullable: true })
  lastUpdatedBy?: string;

  @UpdateDateColumn()
  lastUpdatedDate?: Date;
}
