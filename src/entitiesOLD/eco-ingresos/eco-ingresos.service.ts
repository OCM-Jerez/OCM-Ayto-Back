import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateEcoIngresoDto } from './dto/create-eco-ingreso.dto';
import { UpdateEcoIngresoDto } from './dto/update-eco-ingreso.dto';
import { EcoIngreso } from './entities/eco-ingreso.entity';

@Injectable()
export class EcoIngresosService {
  constructor(
    @InjectRepository(EcoIngreso)
    private readonly ecoIngresoRepository: Repository<EcoIngreso>,
  ) { }

  async create(createEcoIngresoDto: CreateEcoIngresoDto) {
    return await this.ecoIngresoRepository.save(createEcoIngresoDto);
  }

  async findAll() {
    return await this.ecoIngresoRepository.find({ order: { codEco: 'ASC' } });
  }

  async findOne(id: number) {
    return await this.ecoIngresoRepository.findOne(id);
  }

  async update(id: number, updateEcoIngresoDto: UpdateEcoIngresoDto) {
    return await this.ecoIngresoRepository.update(id, updateEcoIngresoDto);
  }

  async remove(id: number) {
    return await this.ecoIngresoRepository.delete(id);
  }
}
