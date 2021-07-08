import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateProgramaDto } from './dto/create-programa.dto';
import { UpdateProgramaDto } from './dto/update-programa.dto';
import { Programa } from './entities/programa.entity';

@Injectable()
export class ProgramasService {
  constructor(
    @InjectRepository(Programa)
    private readonly programaRepository: Repository<Programa>,
  ) {}

  async create(payload: CreateProgramaDto): Promise<Programa> {
    return this.programaRepository.save(payload);
  }

  // En el ejemplo de Nest tipa las respuestas como Promise.
  // https://github.com/nestjs/nest/blob/f472852d441b7f66e52449e09f885ab57807bf96/sample/05-sql-typeorm/src/photo/photo.controller.ts
  async findAll(): Promise<void | Programa[]> {
    return await this.programaRepository.find({ order: { codPro: 'ASC' } });
  }

  async findOne(id: string) {
    return await this.programaRepository.findOne(id);
  }

  async update(id: string, updateProgramaDto: UpdateProgramaDto) {
    return await this.programaRepository.update(id, updateProgramaDto);
  }

  async delete(id: string): Promise<any> {
    return await this.programaRepository.delete(id);
  }
}
