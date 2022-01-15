import { EntityRepository, Repository } from 'typeorm';
import { Barrio } from './entities/barrio.entity';

@EntityRepository(Barrio)
export class BarrioRepository extends Repository<Barrio> {}
