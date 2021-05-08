import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PresupuestoCapitulosService } from './presupuesto-capitulos.service';
import { CreatePresupuestoCapituloDto } from './dto/create-presupuesto-capitulo.dto';
import { UpdatePresupuestoCapituloDto } from './dto/update-presupuesto-capitulo.dto';

@Controller('presupuesto-capitulos')
export class PresupuestoCapitulosController {
  constructor(
    private readonly presupuestoCapitulosService: PresupuestoCapitulosService,
  ) {}

  @Post()
  create(@Body() createPresupuestoCapituloDto: CreatePresupuestoCapituloDto) {
    return this.presupuestoCapitulosService.create(
      createPresupuestoCapituloDto,
    );
  }

  @Get()
  findAll() {
    return this.presupuestoCapitulosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.presupuestoCapitulosService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePresupuestoCapituloDto: UpdatePresupuestoCapituloDto,
  ) {
    return this.presupuestoCapitulosService.update(
      +id,
      updatePresupuestoCapituloDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.presupuestoCapitulosService.remove(+id);
  }
}
