import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../entities/base.entity';
import { Licitacione } from '../../licitaciones/entities/licitacione.entity';

@Entity('licitacion-lote')
export class LicitacionesLote extends BaseEntity {
  // @Column({ type: 'varchar', length: 36, nullable: false })
  // id_licitacion: string;

  @Column({ nullable: true })
  numero: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  descripcion: string;

  @Column({ nullable: true })
  fechaAdjudicacion: Date;

  @Column({ type: 'varchar', length: 255, nullable: true })
  adjudicatario: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  observaciones: string;

  // lote es la entidad debil
  // un lote solo puede pertenecer a una licitacion.
  // https://platzi.com/clases/2282-nestjs-typeorm/37305-relaciones-uno-a-muchos/
  @ManyToOne(() => Licitacione)
  licitacione: Licitacione;

  @Column({ nullable: true })
  licitacioneId: string;
}
