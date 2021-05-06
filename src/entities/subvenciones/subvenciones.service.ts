import { Injectable } from '@nestjs/common';
import { CreateSubvencioneDto } from './dto/create-subvencione.dto';
import { UpdateSubvencioneDto } from './dto/update-subvencione.dto';

@Injectable()
export class SubvencionesService {
  create(createSubvencioneDto: CreateSubvencioneDto) {
    return 'This action adds a new subvencione';
  }

  findAll() {
    return `This action returns all subvenciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subvencione`;
  }

  update(id: number, updateSubvencioneDto: UpdateSubvencioneDto) {
    return `This action updates a #${id} subvencione`;
  }

  remove(id: number) {
    return `This action removes a #${id} subvencione`;
  }
}
