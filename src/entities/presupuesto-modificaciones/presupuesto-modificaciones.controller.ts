import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PresupuestoModificacionesService } from './presupuesto-modificaciones.service';
import { CreatePresupuestoModificacioneDto } from './dto/create-presupuesto-modificacione.dto';
import { UpdatePresupuestoModificacioneDto } from './dto/update-presupuesto-modificacione.dto';

@Controller('presupuesto-modificaciones')
export class PresupuestoModificacionesController {
  constructor(
    private readonly presupuestoModificacionesService: PresupuestoModificacionesService,
  ) {}

  @Post()
  create(
    @Body()
    createPresupuestoModificacioneDto: CreatePresupuestoModificacioneDto,
  ) {
    return this.presupuestoModificacionesService.create(
      createPresupuestoModificacioneDto,
    );
  }

  @Get()
  findAll() {
    return this.presupuestoModificacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.presupuestoModificacionesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    updatePresupuestoModificacioneDto: UpdatePresupuestoModificacioneDto,
  ) {
    return this.presupuestoModificacionesService.update(
      +id,
      updatePresupuestoModificacioneDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.presupuestoModificacionesService.remove(+id);
  }
}
