import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Ente } from '../ente/ente.entity';
import { CreateEnteDto, EditEnteDto } from './dto';
// import { User } from 'src/user/entities';

@Injectable()
export class EnteService {
  constructor(
    @InjectRepository(Ente)
    private readonly enteRepository: Repository<Ente>,
  ) {}

  async getMany() {
    return await this.enteRepository.find();
  }

  async getById(id: number) {
    const ente = await this.enteRepository.findOne(id);

    if (!ente)
      throw new NotFoundException('Post does not exist or unauthorized');
    return ente;
  }

  async createOne(dto: CreateEnteDto) {
    const ente = this.enteRepository.create({ ...dto });
    return await this.enteRepository.save(ente);
  }

  async editOne(id: number, dto: EditEnteDto) {
    const ente = await this.getById(id);
    const editedEnte = Object.assign(ente, dto);
    return await this.enteRepository.save(editedEnte);
  }

  async deleteOne(id: number) {
    const ente = await this.getById(id);
    return await this.enteRepository.remove(ente);
  }
}