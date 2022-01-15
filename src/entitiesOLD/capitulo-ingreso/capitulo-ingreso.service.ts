import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateCapituloIngresoDto } from './dto/create-capitulo-ingreso.dto';
import { UpdateCapituloIngresoDto } from './dto/update-capitulo-ingreso.dto';
import { CapituloIngreso } from './entities/capitulo-ingreso.entity';

@Injectable()
export class CapituloIngresoService {
  constructor(
    @InjectRepository(CapituloIngreso)
    private readonly capituloIngresoRepository: Repository<CapituloIngreso>,
  ) { }

  async create(createCapituloIngresoDto: CreateCapituloIngresoDto) {
    return await this.capituloIngresoRepository.save(createCapituloIngresoDto);
  }

  async findAll() {
    return await this.capituloIngresoRepository.find({ order: { codCap: 'ASC' } });
  }

  async findOne(id: number) {
    return await this.capituloIngresoRepository.findOne(id);
  }

  async update(id: number, updateCapituloIngresoDto: UpdateCapituloIngresoDto) {
    return await this.capituloIngresoRepository.update(id, updateCapituloIngresoDto);
  }

  async remove(id: number) {
    return await this.capituloIngresoRepository.delete(id);
  }
}
