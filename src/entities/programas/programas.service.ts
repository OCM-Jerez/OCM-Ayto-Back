import {
  Injectable,
  Logger,
  NotFoundException,
  UseInterceptors,
} from '@nestjs/common';
import { getManager, getRepository, Repository } from 'typeorm';

import { CreateProgramaDto } from './dto/create-programa.dto';
import { UpdateProgramaDto } from './dto/update-programa.dto';
import { Programa } from './entities/programa.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { LoggingInterceptor } from '../../interceptors/logging.interceptor';
import { any } from 'joi';

@Injectable()
@UseInterceptors(LoggingInterceptor)
export class ProgramasService {
  logger = new Logger('ProgramasService');
  constructor(
    @InjectRepository(Programa)
    private readonly programaRepository: Repository<Programa>,
  ) {}

  create(createProgramaDto: CreateProgramaDto) {
    return this.programaRepository.save(createProgramaDto);
  }

  // this.programaRepository.

  async find() {
    // const entityManager = getManager();
    // const rawData = await entityManager.query(`SELECT * FROM PROGRAMA`);
    // return rawData;
    // const programaRepository = getRepository(Programa); // you can also get it via getConnection().getRepository() or getManager().getRepository()
    return await this.programaRepository.find({ order: { codPro: 'ASC' } });
  }

  async findOne(id: string) {
    const programa = await this.programaRepository.findOne(id);
    console.log(programa);
    if (!programa) throw new NotFoundException('El programa no existe');
    return programa;
  }

  // async update(id: string, updateProgramaDto: UpdateProgramaDto) {
  //   const programa = await this.getById(id);
  //   const editedPrograma = Object.assign(programa, updateProgramaDto);
  //   return await this.programaRepository.save(editedPrograma);
  // }

  async update(id: string, updateProgramaDto: UpdateProgramaDto) {
    return await this.programaRepository.update(id, updateProgramaDto);
  }

  // async remove(id: string) {
  //   const programa = await this.getById(id);
  //   return await this.programaRepository.remove(programa);
  // }

  async delete(id: string) {
    return await this.programaRepository.delete(id);
  }

  // async getById(id: string) {
  //   const programa = await this.programaRepository.findOne(id);
  //   if (!programa) throw new NotFoundException('El programa no existe');
  //   return programa;
  // }
}
function entityManager() {
  // throw new Error('Function not implemented.');
}
