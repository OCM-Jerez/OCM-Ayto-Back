import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Logger,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreateProgramaDto, UpdateProgramaDto } from './dto';
import { ProgramasService } from './programas.service';
import { LoggingInterceptor } from '../../interceptors/logging.interceptor';

@ApiTags('programas')
@Controller('programas')
@UseInterceptors(LoggingInterceptor)

export class ProgramasController {
  logger = new Logger('ProgramasService');

  constructor(private readonly programasService: ProgramasService) {}

  @Post()
  create(@Body() createProgramaDto: CreateProgramaDto) {
    return this.programasService.create(createProgramaDto);
  }

  @Get()
  // findAll() {
  // return this.programasService.findAll();
  async find() {
   return await this.programasService.find();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.programasService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProgramaDto: UpdateProgramaDto,
  ) {
    return await this.programasService.update(id, updateProgramaDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.programasService.remove(id);
  // }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.programasService.delete(id);
  }
}
