import { Injectable } from '@nestjs/common';
import { CreateLegislacionDto } from './dto/create-legislacion.dto';
import { UpdateLegislacionDto } from './dto/update-legislacion.dto';

@Injectable()
export class LegislacionService {
  create(createLegislacionDto: CreateLegislacionDto) {
    return 'This action adds a new legislacion';
  }

  findAll() {
    return `This action returns all legislacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} legislacion`;
  }

  update(id: number, updateLegislacionDto: UpdateLegislacionDto) {
    return `This action updates a #${id} legislacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} legislacion`;
  }
}
