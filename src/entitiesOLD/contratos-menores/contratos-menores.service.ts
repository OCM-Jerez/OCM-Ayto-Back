import { Injectable } from '@nestjs/common';
import { CreateContratosMenoreDto } from './dto/create-contratos-menore.dto';
import { UpdateContratosMenoreDto } from './dto/update-contratos-menore.dto';

@Injectable()
export class ContratosMenoresService {
  create(createContratosMenoreDto: CreateContratosMenoreDto) {
    return 'This action adds a new contratosMenore';
  }

  findAll() {
    return `This action returns all contratosMenores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contratosMenore`;
  }

  update(id: number, updateContratosMenoreDto: UpdateContratosMenoreDto) {
    return `This action updates a #${id} contratosMenore`;
  }

  remove(id: number) {
    return `This action removes a #${id} contratosMenore`;
  }
}
