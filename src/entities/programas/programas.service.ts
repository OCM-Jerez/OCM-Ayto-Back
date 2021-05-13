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

@Injectable()
@UseInterceptors(LoggingInterceptor)
export class ProgramasService {
  logger = new Logger('ProgramasService');
  constructor(
    @InjectRepository(Programa)
    private readonly programaRepository: Repository<Programa>,
  ) {}

  async create(payload: CreateProgramaDto): Promise<Programa> {
    try {
      const temp = await this.programaRepository.save(payload);
      console.log('Respuesta create', temp);
      if (temp.id.length < 32) {
        throw new NotFoundException('El registro NO se ha creado');
      }
      return this.programaRepository.save(payload);
    } catch (error) {
      console.log('error en service', error.response);
      // return Null;
    }
  }

  // this.programaRepository.

  async find() {
    // const entityManager = getManager();
    // const rawData = await entityManager.query(`SELECT * FROM PROGRAMA`);
    // return rawData;
    // const programaRepository = getRepository(Programa); // you can also get it via getConnection().getRepository() or getManager().getRepository()
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

  // async delete(id: string) {
  //   return await this.programaRepository.delete(id);
  // }

  async delete(id: string): Promise<number> {
    // try {
    //   const DeleteResult = await this.programaRepository.delete(id);
    //   // console.log(DeleteResult);
    //   if (DeleteResult.affected === 0) {
    //     throw new NotFoundException('El registro No se ha borrado');
    //   }
    // } catch (err) {
    //   console.log(err.response);
    // } finally {
    //   return DeleteResult.affected;
    // }

    try {
      const DeleteResult = await this.programaRepository.delete(id);
      // console.log(DeleteResult);
      if (DeleteResult.affected === 0) {
        throw new NotFoundException('El registro No se ha borrado');
      }
      return DeleteResult.affected;
    } catch (error) {
      console.log('error en service', error.response);
      return 0;
    }

    // const DeleteResult = await this.programaRepository.delete(id);
    // console.log(DeleteResult);
    // if (DeleteResult.affected === 0) {
    //   throw new NotFoundException('El registro No se ha borrado');
    // }
    // return DeleteResult.affected;
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
