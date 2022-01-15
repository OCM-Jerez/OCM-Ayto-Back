import {
  Injectable,
} from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateDistritoDto } from './dto/create-distrito.dto';
import { UpdateDistritoDto } from './dto/update-distrito.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Distrito } from './entities/distrito.entity';

@Injectable()
export class DistritoService {
  constructor(
    @InjectRepository(Distrito)
    private readonly DistritoRepository: Repository<Distrito>,
  ) { }

  create(createDistritoDto: CreateDistritoDto) {
    return this.DistritoRepository.save(createDistritoDto);
  }

  findAll() {
    return this.DistritoRepository
      .find({ order: { nombre: 'ASC' } })
      .catch((err) => console.log(err));
  }

  findOne(id: string) {
    return this.DistritoRepository.findOne(id);
  }

  update(id: string, updateDistritoDto: UpdateDistritoDto) {
    return this.DistritoRepository.update(id, updateDistritoDto);
  }

  remove(id: string) {
    return this.DistritoRepository.delete(id);
  }
}
