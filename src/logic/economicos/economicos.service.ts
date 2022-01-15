import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateEconomicoDto } from './dto/create-economico.dto';
import { UpdateEconomicoDto } from './dto/update-economico.dto';
import { Economico } from '../../entities/economico.entity';


@Injectable()
export class EconomicosService {
  constructor(
    @InjectRepository(Economico)
    private readonly economicoRepository: Repository<Economico>,
  ) { }

  // async create(CreateEconomicoDto: CreateEconomicoDto) {
  //   return 'This action adds a new economico';
  // }

  async create(payload: CreateEconomicoDto): Promise<Economico> {
    return await this.economicoRepository.save(payload);
  }

  async findAll(): Promise<void | Economico[]> {
    return await this.economicoRepository.find({ order: { codEco: 'ASC' } });
  }

  async findOne(id: number) {
    return await this.economicoRepository.findOne(id);
  }

  async update(id: number, updateEconomicoDto: UpdateEconomicoDto) {
    return await this.economicoRepository.update(id, updateEconomicoDto);
  }

  async remove(id: number) {
    return await this.economicoRepository.delete(id);
  }
}
