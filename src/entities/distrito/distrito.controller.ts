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

import { DistritoService } from './distrito.service';
import { CreateDistritoDto } from './dto/create-distrito.dto';
import { UpdateDistritoDto } from './dto/update-distrito.dto';

@ApiTags('distrito')
@Controller('distrito')
@UseInterceptors(LoggingInterceptor)

export class DistritoController {
  constructor(private readonly distritoService: DistritoService) { }
  @Post()
  create(@Body() createDistritoDto: CreateDistritoDto) {
    return this.distritoService.create(createDistritoDto);
  }

  @Get()
  findAll() {
    return this.distritoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.distritoService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDistritoDto: UpdateDistritoDto,
  ) {
    return await this.distritoService.update(id, updateDistritoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.distritoService.remove(id);
  }
}
