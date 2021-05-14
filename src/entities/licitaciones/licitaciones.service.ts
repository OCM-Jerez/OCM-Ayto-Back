import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateLicitacioneDto } from './dto/create-licitacione.dto';
import { UpdateLicitacioneDto } from './dto/update-licitacione.dto';
import { Licitacione } from './entities/licitacione.entity';

@Injectable()
export class LicitacionesService {
  constructor(
    @InjectRepository(Licitacione)
    private readonly licitacioneRepository: Repository<Licitacione>,
  ) {}

  create(createLicitacioneDto: CreateLicitacioneDto) {
    return 'This action adds a new licitacione';
  }

  findAll() {
    return `This action returns all licitaciones`;
  }

  async findOne(id: string) {
    const licitacione = this.licitacioneRepository.findOne({
      relations: ['licitacionesLote'],
    });
    if (!licitacione) {
      throw new NotFoundException(`Licitación #${id} not found`);
    }
    return licitacione;
  }

  update(id: number, updateLicitacioneDto: UpdateLicitacioneDto) {
    return `This action updates a #${id} licitacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} licitacione`;
  }
}
