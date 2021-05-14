import { EntityRepository, Repository } from 'typeorm';
import { LicitacionesLote } from './../licitaciones-lotes/entities/licitaciones-lote.entity';

@EntityRepository(LicitacionesLote)
export class LicitacioneLoteRepository extends Repository<LicitacionesLote> {}
