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

import { EnteService } from './ente.service';
import { CreateEnteDto, UpdateEnteDto } from './dto';

@ApiTags('ente')
@Controller('ente')
@UseInterceptors(LoggingInterceptor)

export class EnteController {
  constructor(private readonly enteService: EnteService) { }
  @Post()
  create(@Body() createEnteDto: CreateEnteDto) {
    return this.enteService.create(createEnteDto);
  }

  @Get()
  findAll() {
    return this.enteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enteService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEnteDto: UpdateEnteDto,
  ) {
    return await this.enteService.update(id, updateEnteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enteService.remove(id);
  }
}