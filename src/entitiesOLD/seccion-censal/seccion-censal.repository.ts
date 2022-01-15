import { EntityRepository, Repository } from 'typeorm';
import { SeccionCensal } from './entities/seccion-censal.entity';

@EntityRepository(SeccionCensal)
export class SeccionCensalRepository extends Repository<SeccionCensal> { }
