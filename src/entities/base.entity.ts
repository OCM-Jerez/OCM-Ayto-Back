import {
  ObjectIdColumn,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
// import { ApiModelProperty } from '@nestjs/swagger';

// https://typeorm.io/#/select-query-builder/hidden-columns
// Con select: false se evita quel el campo se incluya en la respuesta de una consulta.

export abstract class BaseEntity {
  @ObjectIdColumn()
  @PrimaryGeneratedColumn('uuid')
  // @ApiModelProperty({ example: '66ed8031-d40e-4f30-8ae4-8bf5c2ca87ff', description: 'Entity id' })
  id: string;

  @Column({ type: 'varchar', length: 36, default: 'mam', nullable: true, select: false })
  createdBy: string;

  // https://typeorm.io/#/decorator-reference/createdatecolumn
  @CreateDateColumn({ select: false })
  createdDate: Date;

  @Column({ type: 'varchar', length: 36, default: 'mam', nullable: true, select: false })
  lastUpdatedBy: string;

  @UpdateDateColumn({ select: false })
  lastUpdatedDate: Date;
}
