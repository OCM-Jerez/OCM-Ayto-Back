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

import { SindicatoService } from './sindicato.service';
import { CreateSindicatoDto, UpdateSindicatoDto } from './dto';

@ApiTags('sindicato')
@Controller('sindicato')
@UseInterceptors(LoggingInterceptor)

export class SindicatoController {
  constructor(private readonly sindicatoService: SindicatoService) { }
  @Post()
  create(@Body() createSindicatoDto: CreateSindicatoDto) {
    return this.sindicatoService.create(createSindicatoDto);
  }

  @Get()
  findAll() {
    return this.sindicatoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sindicatoService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSindicatoDto: UpdateSindicatoDto,
  ) {
    return await this.sindicatoService.update(id, updateSindicatoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sindicatoService.remove(id);
  }
}