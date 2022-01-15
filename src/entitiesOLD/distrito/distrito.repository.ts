import { EntityRepository, Repository } from 'typeorm';
import { Distrito } from './entities/distrito.entity';

@EntityRepository(Distrito)
export class DistritoRepository extends Repository<Distrito> { }
