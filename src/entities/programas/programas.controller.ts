import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreateProgramaDto, UpdateProgramaDto } from './dto';
import { ProgramasService } from './programas.service';
import { Programa } from './entities/programa.entity';

@ApiTags('programas')
@Controller('programas')
export class ProgramasController {
  constructor(private readonly programasService: ProgramasService) {}

  @Post()
  async create(@Body() createProgramaDto: CreateProgramaDto) {
    return await this.programasService.create(createProgramaDto);
  }

  @Get()
  async find(): Promise<void | Programa[]> {
    return await this.programasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.programasService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProgramaDto: UpdateProgramaDto,
  ) {
    return await this.programasService.update(id, updateProgramaDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.programasService.delete(id);
  }
}
