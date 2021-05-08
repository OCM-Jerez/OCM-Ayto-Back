import { Injectable } from '@nestjs/common';
import { CreateOrganosContratacionDto } from './dto/create-organos-contratacion.dto';
import { UpdateOrganosContratacionDto } from './dto/update-organos-contratacion.dto';

@Injectable()
export class OrganosContratacionService {
  create(createOrganosContratacionDto: CreateOrganosContratacionDto) {
    return 'This action adds a new organosContratacion';
  }

  findAll() {
    return `This action returns all organosContratacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} organosContratacion`;
  }

  update(id: number, updateOrganosContratacionDto: UpdateOrganosContratacionDto) {
    return `This action updates a #${id} organosContratacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} organosContratacion`;
  }
}
