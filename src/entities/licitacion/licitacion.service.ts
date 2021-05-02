import { Injectable } from '@nestjs/common';
import { CreateLicitacionDto } from './dto/create-licitacion.dto';
import { UpdateLicitacionDto } from './dto/update-licitacion.dto';

@Injectable()
export class LicitacionService {
  create(createLicitacionDto: CreateLicitacionDto) {
    return 'This action adds a new licitacion';
  }

  findAll() {
    return `This action returns all licitacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} licitacion`;
  }

  update(id: number, updateLicitacionDto: UpdateLicitacionDto) {
    return `This action updates a #${id} licitacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} licitacion`;
  }
}
