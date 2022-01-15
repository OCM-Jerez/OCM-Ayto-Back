import {
  Injectable,
} from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateSindicatoDto, UpdateSindicatoDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Sindicato } from './entities/sindicato.entity';

@Injectable()
export class SindicatoService {
  constructor(
    @InjectRepository(Sindicato)
    private readonly SindicatoRepository: Repository<Sindicato>,
  ) { }

  create(createSindicatoDto: CreateSindicatoDto) {
    return this.SindicatoRepository.save(createSindicatoDto);
  }

  findAll() {
    return this.SindicatoRepository
      .find({ order: { nombre: 'ASC' } })
      .catch((err) => console.log(err));
  }

  findOne(id: string) {
    return this.SindicatoRepository.findOne(id);
  }

  update(id: string, updateSindicatoDto: UpdateSindicatoDto) {
    return this.SindicatoRepository.update(id, updateSindicatoDto);
  }

  remove(id: string) {
    return this.SindicatoRepository.delete(id);
  }
}
