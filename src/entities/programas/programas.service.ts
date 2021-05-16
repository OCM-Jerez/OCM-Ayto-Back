/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException, UseInterceptors } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

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
  ) {}

  async create(payload: CreateProgramaDto): Promise<Programa> {
    return this.programaRepository.save(payload);
  }

  // En el ejemplo de Nest tipa las respuestas como Promise.
  // https://github.com/nestjs/nest/blob/f472852d441b7f66e52449e09f885ab57807bf96/sample/05-sql-typeorm/src/photo/photo.controller.ts
  async find(): Promise<void | Programa[]> {
    return await this.programaRepository
      .find({ order: { codPro: 'ASC' } })
      .catch((err) => console.log(err));
  }

  async findOne(id: string) {
    const programa = await this.programaRepository.findOne(id);
    if (!programa) {
      console.log('El programa no existe');
      throw new NotFoundException('El programa no existe');
    }
    console.log('Respondo con el programa');
    return programa;
  }

  async update(id: string, updateProgramaDto: UpdateProgramaDto) {
    return await this.programaRepository.update(id, updateProgramaDto);
  }

  async delete(id: string): Promise<number> {
    const DeleteResult = await this.programaRepository.delete(id);
    return DeleteResult.affected;
  }
}

/*
Manejo de errores.
     La documentacion de Nest aconseja usar:
     https://docs.nestjs.com/exception-filters

     Ejemplos de uso:
     https://www.youtube.com/watch?v=XP_gONOksuM
     https://www.youtube.com/watch?v=PdYCxDl4j0c
     https://medium.com/swlh/filters-how-nest-js-handle-exceptions-c2e54cbc961a
     https://jenijoe.medium.com/angular-crud-service-create-it-extend-it-d972d61fc400

     Preferencia al declarar filter:
     https://stackoverflow.com/questions/54727103/nestjs-how-to-pass-the-error-from-one-error-filter-to-another?fbclid=IwAR0OC_4XqxpNncs9vSVpaGKqKFHTbyNIoLvXMQ6wJSQmt6F3OkpF_x50DxE
*/
