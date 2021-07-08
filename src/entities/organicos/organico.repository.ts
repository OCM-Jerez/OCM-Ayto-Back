/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { Organico } from './entities/organico.entity';

@EntityRepository(Organico)
export class OrganicoRepository extends Repository<Organico> { }
