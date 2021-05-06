import { EntityRepository, Repository } from 'typeorm';
import { Programa } from './entities/programa.entity';

@EntityRepository(Programa)
export class ProgramaRepository extends Repository<Programa> {}
