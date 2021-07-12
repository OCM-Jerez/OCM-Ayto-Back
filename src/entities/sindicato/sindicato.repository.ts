import { EntityRepository, Repository } from 'typeorm';
import { Sindicato } from './entities/sindicato.entity';

@EntityRepository(Sindicato)
export class SindicatoRepository extends Repository<Sindicato> { }
