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
import { LoggingInterceptor } from 'src/common/interceptors/logging.interceptor';

import { CreateLicitacioneDto, UpdateLicitacioneDto } from './dto';
import { LicitacionesService } from './licitaciones.service';

@ApiTags('licitaciones')
@Controller('licitaciones')
@UseInterceptors(LoggingInterceptor)

export class LicitacionesController {
  logger = new Logger('LicitacionesControler');
  constructor(private readonly licitacionesService: LicitacionesService) {}

  @Post()
  async create(@Body() createLicitacioneDto: CreateLicitacioneDto) {
    console.log('createLicitacioneDto en Controller:', createLicitacioneDto);
    return await this.licitacionesService.create(createLicitacioneDto);
  }

  @Get()
  async findAll() {
    return await this.licitacionesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.licitacionesService.findOne(id);
  }

  // se puede utilizar @Put
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateLicitacioneDto: UpdateLicitacioneDto,
  ) {
    return await this.licitacionesService.update(+id, updateLicitacioneDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.licitacionesService.remove(+id);
  }
}
