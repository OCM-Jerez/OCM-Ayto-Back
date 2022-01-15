import { Injectable } from '@nestjs/common';
import { CreatePmpDto } from './dto/create-pmp.dto';
import { UpdatePmpDto } from './dto/update-pmp.dto';

@Injectable()
export class PmpService {
  create(createPmpDto: CreatePmpDto) {
    return 'This action adds a new pmp';
  }

  findAll() {
    return `This action returns all pmp`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pmp`;
  }

  update(id: number, updatePmpDto: UpdatePmpDto) {
    return `This action updates a #${id} pmp`;
  }

  remove(id: number) {
    return `This action removes a #${id} pmp`;
  }
}
