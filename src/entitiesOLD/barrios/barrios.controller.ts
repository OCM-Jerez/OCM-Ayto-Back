import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseInterceptors,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoggingInterceptor } from 'src/common/interceptors/logging.interceptor';

import { BarriosService } from './barrios.service';
import { CreateBarrioDto, UpdateBarrioDto } from './dto';

@ApiTags('barrios')
@Controller('barrios')
@UseInterceptors(LoggingInterceptor)

export class BarriosController {
  constructor(private readonly barriosService: BarriosService) {}

  @Post()
  create(@Body() createBarrioDto: CreateBarrioDto) {
    return this.barriosService.create(createBarrioDto);
  }

  @Get()
  findAll() {
    return this.barriosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.barriosService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProgramaDto: UpdateBarrioDto,
  ) {
    return await this.barriosService.update(id, updateProgramaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.barriosService.remove(id);
  }
}
