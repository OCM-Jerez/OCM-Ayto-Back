/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { CapituloIngreso } from './entities/capitulo-ingreso.entity';

@EntityRepository(CapituloIngreso)
export class CapituloIngresoRepository extends Repository<CapituloIngreso> { }
