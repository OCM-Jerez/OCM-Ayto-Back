// export class Licitacione {}

import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
// import { LicitacionesLote } from '../licitaciones-lotes/entities/licitaciones-lote.entity';

@Entity('licitacione')
export class Licitacione extends BaseEntity {
  @Column({ type: 'varchar', length: 4, nullable: true })
  year: string;

  @Column({ type: 'varchar', length: 12, nullable: false })
  expediente: string;

  @Column({ nullable: true })
  fechaAnuncio: Date;

  @Column({ nullable: true })
  fechaPresentacionOfertas: Date;

  @Column({ type: 'varchar', length: 150, nullable: false })
  organoContratacion: string;

  @Column({ nullable: true })
  licitadoresPresentados: number;

  @Column({ type: 'varchar', length: 20, nullable: false })
  estado: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  objeto: string;

  @Column({ nullable: true })
  presupuestoBase: number;

  @Column({ nullable: true })
  valorEstimado: number;

  @Column({ nullable: true })
  importeAdjudicacion: number;

  @Column({ nullable: true })
  IVA: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  tipoContrato: string;

  @Column({ nullable: true })
  codigoCPV: number;

  @Column({ type: 'varchar', length: 150, nullable: false })
  procedimientoContratacion: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  resultado: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  URL: string;

  // licitacion es la entidad fuerte
  // una licitacion puede tener N lotes.
  // @OneToMany(
  //   () => LicitacionesLote,
  //   (licitacionesLote) => licitacionesLote.licitacione,
  // )
  // licitacionesLote: LicitacionesLote[];
}
