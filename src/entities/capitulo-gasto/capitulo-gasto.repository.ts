/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { CapituloGasto } from './entities/capitulo-gasto.entity';

@EntityRepository(CapituloGasto)
export class CapituloGastoRepository extends Repository<CapituloGasto> { }
