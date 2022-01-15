import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CapituloGastoService } from './capitulo-gasto.service';
import { CreateCapituloGastoDto } from './dto/create-capitulo-gasto.dto';
import { UpdateCapituloGastoDto } from './dto/update-capitulo-gasto.dto';

@ApiTags('capitulo-gasto')
@Controller('capitulo-gasto')
export class CapituloGastoController {
  constructor(private readonly capituloGastoService: CapituloGastoService) { }

  @Post()
  create(@Body() createCapituloGastoDto: CreateCapituloGastoDto) {
    return this.capituloGastoService.create(createCapituloGastoDto);
  }

  @Get()
  findAll() {
    return this.capituloGastoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.capituloGastoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCapituloGastoDto: UpdateCapituloGastoDto) {
    return this.capituloGastoService.update(+id, updateCapituloGastoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.capituloGastoService.remove(+id);
  }
}
