import { Injectable } from '@nestjs/common';
import { CreateHemerotecaDto } from './dto/create-hemeroteca.dto';
import { UpdateHemerotecaDto } from './dto/update-hemeroteca.dto';

@Injectable()
export class HemerotecaService {
  create(createHemerotecaDto: CreateHemerotecaDto) {
    return 'This action adds a new hemeroteca';
  }

  findAll() {
    return `This action returns all hemeroteca`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hemeroteca`;
  }

  update(id: number, updateHemerotecaDto: UpdateHemerotecaDto) {
    return `This action updates a #${id} hemeroteca`;
  }

  remove(id: number) {
    return `This action removes a #${id} hemeroteca`;
  }
}
