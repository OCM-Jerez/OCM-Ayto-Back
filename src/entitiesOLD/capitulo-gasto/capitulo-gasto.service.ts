import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateCapituloGastoDto } from './dto/create-capitulo-gasto.dto';
import { UpdateCapituloGastoDto } from './dto/update-capitulo-gasto.dto';
import { CapituloGasto } from './entities/capitulo-gasto.entity';


@Injectable()
export class CapituloGastoService {
  constructor(
    @InjectRepository(CapituloGasto)
    private readonly capituloGastoRepository: Repository<CapituloGasto>,
  ) { }

  async create(createCapituloIngresoDto: CreateCapituloGastoDto) {
    return await this.capituloGastoRepository.save(createCapituloIngresoDto);
  }

  async findAll() {
    return await this.capituloGastoRepository.find({ order: { codCap: 'ASC' } });
  }

  async findOne(id: number) {
    return await this.capituloGastoRepository.findOne(id);
  }

  async update(id: number, updateCapituloIngresoDto: UpdateCapituloGastoDto) {
    return await this.capituloGastoRepository.update(id, updateCapituloIngresoDto);
  }

  async remove(id: number) {
    return await this.capituloGastoRepository.delete(id);
  }
}
