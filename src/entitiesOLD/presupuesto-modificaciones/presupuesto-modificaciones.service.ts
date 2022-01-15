import { Injectable } from '@nestjs/common';
import { CreatePresupuestoModificacioneDto } from './dto/create-presupuesto-modificacione.dto';
import { UpdatePresupuestoModificacioneDto } from './dto/update-presupuesto-modificacione.dto';

@Injectable()
export class PresupuestoModificacionesService {
  create(createPresupuestoModificacioneDto: CreatePresupuestoModificacioneDto) {
    return 'This action adds a new presupuestoModificacione';
  }

  findAll() {
    return `This action returns all presupuestoModificaciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} presupuestoModificacione`;
  }

  update(
    id: number,
    updatePresupuestoModificacioneDto: UpdatePresupuestoModificacioneDto,
  ) {
    return `This action updates a #${id} presupuestoModificacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} presupuestoModificacione`;
  }
}
