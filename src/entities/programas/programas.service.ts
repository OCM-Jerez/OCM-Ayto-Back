import { Injectable } from '@nestjs/common';
import { getManager, getRepository } from 'typeorm';
import { CreateProgramaDto } from './dto/create-programa.dto';
import { UpdateProgramaDto } from './dto/update-programa.dto';
import { ProgramaRepository } from './programa.repository';
import { Programa } from './entities/programa.entity';

@Injectable()
export class ProgramasService {
  create(createProgramaDto: CreateProgramaDto) {
    return 'This action adds a new programa';
  }

  async findAll() {
    // const entityManager = getManager();
    // const rawData = await entityManager.query(`SELECT * FROM PROGRAMA`);
    // return rawData;

    const programaRepository = getRepository(Programa); // you can also get it via getConnection().getRepository() or getManager().getRepository()
    const rawData = await programaRepository.find({
      order: {
        codPro: 'ASC',
      },
    });
    return rawData;
  }

  findOne(id: number) {
    return `This action returns a #${id} programa`;
  }

  update(id: number, updateProgramaDto: UpdateProgramaDto) {
    return `This action updates a #${id} programa`;
  }

  remove(id: number) {
    return `This action removes a #${id} programa`;
  }
}
function entityManager() {
  throw new Error('Function not implemented.');
}
