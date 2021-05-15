import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { LicitacionesLotesService } from './licitaciones-lotes.service';
import { CreateLicitacionesLoteDto } from './dto';
import { UpdateLicitacionesLoteDto } from './dto';
import { LicitacionesLote } from './entities/licitaciones-lote.entity';

@ApiTags('licitaciones-lotes')
@Controller('licitaciones-lotes')
export class LicitacionesLotesController {
  constructor(
    private readonly licitacionesLotesService: LicitacionesLotesService,
  ) {}

  @Post()
  create(@Body() createLicitacionesLoteDto: LicitacionesLote) {
    return this.licitacionesLotesService.create(createLicitacionesLoteDto);
  }

  @Get()
  findAll() {
    return this.licitacionesLotesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.licitacionesLotesService.findOne(+id);
  }

  @Patch('')
  update(@Body() updateLicitacionesLoteDto: LicitacionesLote) {
    return this.licitacionesLotesService.update(updateLicitacionesLoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.licitacionesLotesService.remove(+id);
  }
}
