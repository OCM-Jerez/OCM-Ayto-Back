import { Injectable } from '@nestjs/common';
import { CreatePresupuestoCapituloDto } from './dto/create-presupuesto-capitulo.dto';
import { UpdatePresupuestoCapituloDto } from './dto/update-presupuesto-capitulo.dto';

@Injectable()
export class PresupuestoCapitulosService {
  create(createPresupuestoCapituloDto: CreatePresupuestoCapituloDto) {
    return 'This action adds a new presupuestoCapitulo';
  }

  findAll() {
    return `This action returns all presupuestoCapitulos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} presupuestoCapitulo`;
  }

  update(id: number, updatePresupuestoCapituloDto: UpdatePresupuestoCapituloDto) {
    return `This action updates a #${id} presupuestoCapitulo`;
  }

  remove(id: number) {
    return `This action removes a #${id} presupuestoCapitulo`;
  }
}
