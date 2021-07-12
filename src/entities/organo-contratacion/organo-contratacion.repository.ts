import { EntityRepository, Repository } from 'typeorm';
import { OrganoContratacion } from './entities/organo-contratacion.entity';

@EntityRepository(OrganoContratacion)
export class OrganoContratacionRepository extends Repository<OrganoContratacion> { }
