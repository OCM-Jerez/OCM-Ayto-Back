import { EntityRepository, Repository } from 'typeorm';
import { Licitacione } from './entities/licitacione.entity';

@EntityRepository(Licitacione)
export class LicitacioneRepository extends Repository<Licitacione> {}
