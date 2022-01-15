import { EntityRepository, Repository } from 'typeorm';
import { Delegacion } from './entities/delegacion.entity';

@EntityRepository(Delegacion)
export class DelegacionRepository extends Repository<Delegacion> { }
