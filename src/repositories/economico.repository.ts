/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { Economico } from '../entities/economico.entity';

@EntityRepository(Economico)
export class EconomicoRepository extends Repository<Economico> { }
