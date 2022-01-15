import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { EcoIngresosService } from './eco-ingresos.service';
import { CreateEcoIngresoDto } from './dto/create-eco-ingreso.dto';
import { UpdateEcoIngresoDto } from './dto/update-eco-ingreso.dto';

@ApiTags('eco-ingresos')
@Controller('eco-ingresos')
export class EcoIngresosController {
  constructor(private readonly ecoIngresosService: EcoIngresosService) { }

  @Post()
  async create(@Body() createEcoIngresoDto: CreateEcoIngresoDto) {
    return await this.ecoIngresosService.create(createEcoIngresoDto);
  }

  @Get()
  async findAll() {
    return await this.ecoIngresosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.ecoIngresosService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateEcoIngresoDto: UpdateEcoIngresoDto) {
    return await this.ecoIngresosService.update(+id, updateEcoIngresoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.ecoIngresosService.remove(+id);
  }
}
