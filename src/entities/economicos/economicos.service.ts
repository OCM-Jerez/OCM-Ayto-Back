import { Injectable } from '@nestjs/common';
import { CreateEconomicoDto } from './dto/create-economico.dto';
import { UpdateEconomicoDto } from './dto/update-economico.dto';

@Injectable()
export class EconomicosService {
  create(createEconomicoDto: CreateEconomicoDto) {
    return 'This action adds a new economico';
  }

  findAll() {
    return `This action returns all economicos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} economico`;
  }

  update(id: number, updateEconomicoDto: UpdateEconomicoDto) {
    return `This action updates a #${id} economico`;
  }

  remove(id: number) {
    return `This action removes a #${id} economico`;
  }
}
