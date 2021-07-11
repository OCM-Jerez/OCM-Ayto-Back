import { EntityRepository, Repository } from 'typeorm';
import { Ente } from './entities/ente.entity';

@EntityRepository(Ente)
export class EnteRepository extends Repository<Ente> { }
