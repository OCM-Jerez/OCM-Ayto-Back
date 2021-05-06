import { Injectable } from '@nestjs/common';
import { CreateDelegacioneDto } from './dto/create-delegacione.dto';
import { UpdateDelegacioneDto } from './dto/update-delegacione.dto';

@Injectable()
export class DelegacionesService {
  create(createDelegacioneDto: CreateDelegacioneDto) {
    return 'This action adds a new delegacione';
  }

  findAll() {
    return `This action returns all delegaciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} delegacione`;
  }

  update(id: number, updateDelegacioneDto: UpdateDelegacioneDto) {
    return `This action updates a #${id} delegacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} delegacione`;
  }
}
