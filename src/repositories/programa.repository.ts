/* eslint-disable prettier/prettier */
import { Programa } from 'src/entities/programa.entity';
import { EntityRepository, Repository } from 'typeorm';
// import { Programa } from '../programa.entity';

@EntityRepository(Programa)
export class ProgramaRepository extends Repository<Programa> { }
