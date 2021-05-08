import { Injectable } from '@nestjs/common';
import { getManager, getRepository, Repository } from 'typeorm';
import { CreateProgramaDto } from './dto/create-programa.dto';
import { UpdateProgramaDto } from './dto/update-programa.dto';
import { Programa } from './entities/programa.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProgramasService {
  constructor(
    @InjectRepository(Programa)
    private readonly programaRepository: Repository<Programa>,
  ) {}

  create(createProgramaDto: CreateProgramaDto) {
    return 'This action adds a new programa';
  }

  async findAll() {
    // const entityManager = getManager();
    // const rawData = await entityManager.query(`SELECT * FROM PROGRAMA`);
    // return rawData;

    // const programaRepository = getRepository(Programa); // you can also get it via getConnection().getRepository() or getManager().getRepository()
    const rawData = await this.programaRepository.find({
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
