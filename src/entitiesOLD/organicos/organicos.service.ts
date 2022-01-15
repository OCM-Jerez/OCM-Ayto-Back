import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateOrganicoDto } from './dto/create-organico.dto';
import { UpdateOrganicoDto } from './dto/update-organico.dto';
import { Organico } from './entities/organico.entity';

@Injectable()
export class OrganicosService {
  constructor(
    @InjectRepository(Organico)
    private readonly organicoRepository: Repository<Organico>,
  ) { }


  create(createOrganicoDto: CreateOrganicoDto) {
    return 'This action adds a new organico';
  }

  async findAll(): Promise<void | Organico[]> {
    return await this.organicoRepository.find({ order: { codOrg: 'ASC' } });
  }


  findOne(id: number) {
    return `This action returns a #${id} organico`;
  }

  update(id: number, updateOrganicoDto: UpdateOrganicoDto) {
    return `This action updates a #${id} organico`;
  }

  remove(id: number) {
    return `This action removes a #${id} organico`;
  }
}
