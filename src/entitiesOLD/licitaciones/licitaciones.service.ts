import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateLicitacioneDto } from './dto/create-licitacione.dto';
import { UpdateLicitacioneDto } from './dto/update-licitacione.dto';
import { Licitacione } from './entities/licitacione.entity';

@Injectable()
export class LicitacionesService {
  logger = new Logger('LicitacionesService');
  constructor(
    @InjectRepository(Licitacione)
    private readonly licitacioneRepository: Repository<Licitacione>,
  ) {}

  async create(
    createLicitacioneDto: CreateLicitacioneDto,
  ): Promise<Licitacione> {
    // try {
      console.log('createLicitacioneDto en Service:', createLicitacioneDto);
      // const temp = await this.licitacioneRepository.save(createLicitacioneDto);
      // if (temp.id.length < 32) {
      //   throw new NotFoundException('El registro NO se ha creado');
      // }
      return this.licitacioneRepository.save(createLicitacioneDto);
    // } catch (error) {
    //   console.log('error en service', error.response);
    //   // return Null;
    // }
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

  async update(id: number, updateLicitacioneDto: UpdateLicitacioneDto) {
    return await `This action updates a #${id} licitacione`;
  }

  async remove(id: number) {
    return await  `This action removes a #${id} licitacione`;
  }
}
