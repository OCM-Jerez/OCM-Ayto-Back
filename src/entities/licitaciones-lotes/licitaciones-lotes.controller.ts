import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LicitacionesLotesService } from './licitaciones-lotes.service';
import { CreateLicitacionesLoteDto } from './dto/create-licitaciones-lote.dto';
import { UpdateLicitacionesLoteDto } from './dto/update-licitaciones-lote.dto';
import { LicitacionesLote } from './entities/licitaciones-lote.entity';

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
