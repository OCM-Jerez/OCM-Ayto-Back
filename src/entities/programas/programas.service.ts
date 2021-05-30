/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable, NotFoundException, UseInterceptors, Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Request, Response } from 'express';

import { CreateProgramaDto } from './dto/create-programa.dto';
import { UpdateProgramaDto } from './dto/update-programa.dto';
import { Programa } from './entities/programa.entity';
import { LoggingInterceptor } from 'src/common/interceptors/logging.interceptor';

@Injectable()
@UseInterceptors(LoggingInterceptor)
export class ProgramasService {
  constructor(
    @InjectRepository(Programa)
    private readonly programaRepository: Repository<Programa>,
  ) { }

  async create(payload: CreateProgramaDto): Promise<Programa> {
    return this.programaRepository.save(payload);
  }

  // En el ejemplo de Nest tipa las respuestas como Promise.
  // https://github.com/nestjs/nest/blob/f472852d441b7f66e52449e09f885ab57807bf96/sample/05-sql-typeorm/src/photo/photo.controller.ts
  async findAll(): Promise<void | Programa[]> {
    return await this.programaRepository
      .find({ order: { codPro: 'ASC' } })
      .catch((err) => console.log(err));
  }

  async findOne(id: string) {
    const programa = await this.programaRepository.findOne(id);
    // if (!programa) {
    //   console.log('El programa no existe');
    //   throw new NotFoundException('El programa no existe');
    // }
    // console.log('Respondo con el programa');
    return programa;
  }

  async update(id: string, updateProgramaDto: UpdateProgramaDto) {
    const respond = await this.programaRepository.update(id, updateProgramaDto);
    if(!respond){
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }

  }

  async delete(id: string): Promise<number> {
    const DeleteResult = await this.programaRepository.delete(id);
    // console.log(DeleteResult.affected);
    if(!DeleteResult.affected){
         throw new HttpException('No se ha borrado el registro.', HttpStatus.FORBIDDEN);
    }
    return DeleteResult.affected;
  }

  // async delete(id: string): Promise<void | number> {
  //   await this.programaRepository.delete(id)
  //     .catch((err) => {
  //       console.log(' Error: ', err);
  //     })
  //     .then((response) => {
  //       console.log('response: ', response);
  //       return response
  //     })
  // }
}

