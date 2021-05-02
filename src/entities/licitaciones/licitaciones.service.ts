import { Injectable } from '@nestjs/common';
import { CreateLicitacioneDto } from './dto/create-licitacione.dto';
import { UpdateLicitacioneDto } from './dto/update-licitacione.dto';

@Injectable()
export class LicitacionesService {
  create(createLicitacioneDto: CreateLicitacioneDto) {
    return 'This action adds a new licitacione';
  }

  findAll() {
    return `This action returns all licitaciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} licitacione`;
  }

  update(id: number, updateLicitacioneDto: UpdateLicitacioneDto) {
    return `This action updates a #${id} licitacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} licitacione`;
  }
}
