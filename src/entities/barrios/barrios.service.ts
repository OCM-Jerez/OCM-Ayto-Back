import {
  Injectable,
  Logger,
  NotFoundException,
  UseInterceptors,
} from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateBarrioDto } from './dto';
import { UpdateBarrioDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Barrio } from './entities/barrio.entity';

@Injectable()
export class BarriosService {
  constructor(
    @InjectRepository(Barrio)
    private readonly barrioRepository: Repository<Barrio>,
  ) {}

  create(createBarrioDto: CreateBarrioDto) {
    return this.barrioRepository.save(createBarrioDto);
  }

  findAll() {
    return this.barrioRepository
      .find({ order: { nombre: 'ASC' } })
      .catch((err) => console.log(err));
  }

  findOne(id: string) {
    return this.barrioRepository.findOne(id);
  }

  update(id: string, updateBarrioDto: UpdateBarrioDto) {
    return this.barrioRepository.update(id, updateBarrioDto);
  }

  remove(id: string) {
    return this.barrioRepository.delete(id);
  }
}
