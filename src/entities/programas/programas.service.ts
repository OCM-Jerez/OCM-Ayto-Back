import { Injectable, ExceptionFilter } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateProgramaDto } from './dto/create-programa.dto';
import { UpdateProgramaDto } from './dto/update-programa.dto';
import { Programa } from './entities/programa.entity';
import { IResponsePrograma } from './interfaces/programas.interface';
import { HttpExceptionFilter } from '../../common/filters/http-exception.filter';

@Injectable()
export class ProgramasService {
  constructor(
    @InjectRepository(Programa)
    private readonly programaRepository: Repository<Programa>,
  ) { }

  create(payload: CreateProgramaDto): Promise<Programa> {
    return this.programaRepository.save(payload);
  }

  // En el ejemplo de Nest tipa las respuestas como Promise.
  // https://github.com/nestjs/nest/blob/f472852d441b7f66e52449e09f885ab57807bf96/sample/05-sql-typeorm/src/photo/photo.controller.ts
  findAll(): Promise<Programa[]> {
    return this.programaRepository.find({ order: { codPro: 'ASC' } });
  }

  findOne(id: string) {
    return this.programaRepository.findOne(id);
  }

  update(id: string, updateProgramaDto: UpdateProgramaDto) {
    return this.programaRepository.update(id, updateProgramaDto);
  }

  delete(id: string): Promise<any> {
    return this.programaRepository.delete(id);
  }
}
