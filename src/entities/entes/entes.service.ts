// import { Injectable } from '@nestjs/common';
// import { CreateEnteDto } from './dto/create-ente.dto';
// import { UpdateEnteDto } from './dto/update-ente.dto';

// @Injectable()
// export class EntesService {
//   create(createEnteDto: CreateEnteDto) {
//     return 'This action adds a new ente';
//   }

//   findAll() {
//     return `This action returns all entes`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} ente`;
//   }

//   update(id: number, updateEnteDto: UpdateEnteDto) {
//     return `This action updates a #${id} ente`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} ente`;
//   }
// }


import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Ente } from '../entes/entities/ente.entity';
import { CreateEnteDto, UpdateEnteDto } from './dto';
// import { User } from 'src/user/entities';

@Injectable()
export class EntesService {
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

  async editOne(id: number, dto: UpdateEnteDto) {
    const ente = await this.getById(id);
    const editedEnte = Object.assign(ente, dto);
    return await this.enteRepository.save(editedEnte);
  }

  async deleteOne(id: number) {
    const ente = await this.getById(id);
    return await this.enteRepository.remove(ente);
  }
}