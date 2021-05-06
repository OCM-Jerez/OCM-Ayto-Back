import { Injectable } from '@nestjs/common';
import { CreateOrganicoDto } from './dto/create-organico.dto';
import { UpdateOrganicoDto } from './dto/update-organico.dto';

@Injectable()
export class OrganicosService {
  create(createOrganicoDto: CreateOrganicoDto) {
    return 'This action adds a new organico';
  }

  findAll() {
    return `This action returns all organicos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} organico`;
  }

  update(id: number, updateOrganicoDto: UpdateOrganicoDto) {
    return `This action updates a #${id} organico`;
  }

  remove(id: number) {
    return `This action removes a #${id} organico`;
  }
}
