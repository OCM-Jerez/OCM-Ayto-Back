import { LicitacionesService } from './../licitaciones/licitaciones.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UpdateLicitacionesLoteDto } from './dto/update-licitaciones-lote.dto';
import { LicitacionesLote } from './entities/licitaciones-lote.entity';
import { LicitacioneRepository } from '../licitaciones/licitacione.repository';
import { LicitacioneLoteRepository } from './licitacion-lote.repository';

@Injectable()
export class LicitacionesLotesService {
  constructor(
    @InjectRepository(LicitacioneLoteRepository)
    private loteRepository: LicitacioneLoteRepository,
    private licitacionesRepository: LicitacionesService,
  ) {}

  async create(payload: LicitacionesLote): Promise<LicitacionesLote | null> {
    // const newLote = await this.loteRepository.save(payload);
    // if (payload.licitacioneId) {
    //   const licitacione = this.licitacionesRepository.findOne(
    //     payload.licitacioneId,
    //   );
    //   // newLote.licitacione = licitacione;
    // }
    const licitacion = await this.licitacionesRepository.findOne(
      payload.licitacioneId,
    );
    payload.licitacione = licitacion;
    return await this.loteRepository.save(payload);
  }

  findAll() {
    return `This action returns all licitacionesLotes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} licitacionesLote`;
  }

  async update(
    licitacionLote: LicitacionesLote,
  ): Promise<LicitacionesLote | null> {
    return await this.loteRepository.save(licitacionLote);
  }

  remove(id: number) {
    return `This action removes a #${id} licitacionesLote`;
  }
}
