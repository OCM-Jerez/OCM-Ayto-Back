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
  constructor(private readonly programasService: ProgramasService) { }

  @Post()
  async create(@Body() createProgramaDto: CreateProgramaDto): Promise<Programa[]> {
    await this.programasService.create(createProgramaDto);
    return await this.programasService.findAll();
  }

  @Get()
  async findAll(): Promise<void | Programa[]> {
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
    await this.programasService.update(id, updateProgramaDto);
    return await this.programasService.findAll();
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.programasService.delete(id);
    return await this.programasService.findAll();
  }
}
