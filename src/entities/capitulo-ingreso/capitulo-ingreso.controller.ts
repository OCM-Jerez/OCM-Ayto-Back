import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CapituloIngresoService } from './capitulo-ingreso.service';
import { CreateCapituloIngresoDto } from './dto/create-capitulo-ingreso.dto';
import { UpdateCapituloIngresoDto } from './dto/update-capitulo-ingreso.dto';

@ApiTags('capitulo-ingresos')
@Controller('capitulo-ingresos')
export class CapituloIngresoController {
  constructor(private readonly capituloIngresoService: CapituloIngresoService) { }

  @Post()
  async create(@Body() createCapituloIngresoDto: CreateCapituloIngresoDto) {
    return await this.capituloIngresoService.create(createCapituloIngresoDto);
  }

  @Get()
  async findAll() {
    return await this.capituloIngresoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.capituloIngresoService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCapituloIngresoDto: UpdateCapituloIngresoDto) {
    return await this.capituloIngresoService.update(+id, updateCapituloIngresoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.capituloIngresoService.remove(+id);
  }
}
