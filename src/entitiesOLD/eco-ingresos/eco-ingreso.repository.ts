/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { EcoIngreso } from './entities/eco-ingreso.entity';

@EntityRepository(EcoIngreso)
export class EcoIngresoRepository extends Repository<EcoIngreso> { }
