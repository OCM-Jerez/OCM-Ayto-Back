import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LicitacionService } from './licitacion.service';
import { CreateLicitacionDto } from './dto/create-licitacion.dto';
import { UpdateLicitacionDto } from './dto/update-licitacion.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Licitaciones')
@Controller('licitacion')
export class LicitacionController {
  constructor(private readonly licitacionService: LicitacionService) {}

  @Post()
  create(@Body() createLicitacionDto: CreateLicitacionDto) {
    return this.licitacionService.create(createLicitacionDto);
  }

  @Get()
  findAll() {
    return this.licitacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.licitacionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLicitacionDto: UpdateLicitacionDto,
  ) {
    return this.licitacionService.update(+id, updateLicitacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.licitacionService.remove(+id);
  }
}
