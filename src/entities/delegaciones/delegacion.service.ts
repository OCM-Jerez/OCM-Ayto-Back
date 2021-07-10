import {
  Injectable,
  Logger,
  NotFoundException,
  UseInterceptors,
} from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateDelegacionDto } from './dto/create-delegacion.dto';
import { UpdateDelegacionDto } from './dto/update-delegacion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Delegacion } from './entities/delegacion.entity';

@Injectable()
export class DelegacionService {
  constructor(
    @InjectRepository(Delegacion)
    private readonly delegacionRepository: Repository<Delegacion>,
  ) { }

  create(createDelegacionDto: CreateDelegacionDto) {
    return this.delegacionRepository.save(createDelegacionDto);
  }

  findAll() {
    return this.delegacionRepository
      .find({ order: { nombre: 'ASC' } })
      .catch((err) => console.log(err));
  }

  findOne(id: string) {
    return this.delegacionRepository.findOne(id);
  }

  update(id: string, updateDelegacionDto: UpdateDelegacionDto) {
    return this.delegacionRepository.update(id, updateDelegacionDto);
  }

  remove(id: string) {
    return this.delegacionRepository.delete(id);
  }
}
