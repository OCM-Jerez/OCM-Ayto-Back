import {
  Injectable,
} from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateEnteDto, UpdateEnteDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ente } from './entities/ente.entity';

@Injectable()
export class EnteService {
  constructor(
    @InjectRepository(Ente)
    private readonly EnteRepository: Repository<Ente>,
  ) { }

  create(createEnteDto: CreateEnteDto) {
    return this.EnteRepository.save(createEnteDto);
  }

  findAll() {
    return this.EnteRepository
      .find({ order: { nombre: 'ASC' } })
      .catch((err) => console.log(err));
  }

  findOne(id: string) {
    return this.EnteRepository.findOne(id);
  }

  update(id: string, updateEnteDto: UpdateEnteDto) {
    return this.EnteRepository.update(id, updateEnteDto);
  }

  remove(id: string) {
    return this.EnteRepository.delete(id);
  }
}
