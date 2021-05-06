import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubvencionesService } from './subvenciones.service';
import { CreateSubvencioneDto } from './dto/create-subvencione.dto';
import { UpdateSubvencioneDto } from './dto/update-subvencione.dto';

@Controller('subvenciones')
export class SubvencionesController {
  constructor(private readonly subvencionesService: SubvencionesService) {}

  @Post()
  create(@Body() createSubvencioneDto: CreateSubvencioneDto) {
    return this.subvencionesService.create(createSubvencioneDto);
  }

  @Get()
  findAll() {
    return this.subvencionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subvencionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubvencioneDto: UpdateSubvencioneDto) {
    return this.subvencionesService.update(+id, updateSubvencioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subvencionesService.remove(+id);
  }
}
