import {
  Injectable,
} from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateSeccionCensalDto, UpdateSeccionCensalDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SeccionCensal } from './entities/seccion-censal.entity';

@Injectable()
export class SeccionCensalService {
  constructor(
    @InjectRepository(SeccionCensal)
    private readonly SeccionCensalRepository: Repository<SeccionCensal>,
  ) { }

  create(createSeccionCensalDto: CreateSeccionCensalDto) {
    return this.SeccionCensalRepository.save(createSeccionCensalDto);
  }

  findAll() {
    return this.SeccionCensalRepository
      .find({ order: { nombre: 'ASC' } })
      .catch((err) => console.log(err));
  }

  findOne(id: string) {
    return this.SeccionCensalRepository.findOne(id);
  }

  update(id: string, updateSeccionCensalDto: UpdateSeccionCensalDto) {
    return this.SeccionCensalRepository.update(id, updateSeccionCensalDto);
  }

  remove(id: string) {
    return this.SeccionCensalRepository.delete(id);
  }
}
