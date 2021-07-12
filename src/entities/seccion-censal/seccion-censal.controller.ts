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

import { SeccionCensalService } from './seccion-censal.service';
import { CreateSeccionCensalDto, UpdateSeccionCensalDto } from './dto';

@ApiTags('seccionCensal')
@Controller('seccionCensal')
@UseInterceptors(LoggingInterceptor)

export class SeccionCensalController {
  constructor(private readonly seccionCensalService: SeccionCensalService) { }
  @Post()
  create(@Body() createSeccionCensalDto: CreateSeccionCensalDto) {
    return this.seccionCensalService.create(createSeccionCensalDto);
  }

  @Get()
  findAll() {
    return this.seccionCensalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seccionCensalService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSeccionCensalDto: UpdateSeccionCensalDto,
  ) {
    return await this.seccionCensalService.update(id, updateSeccionCensalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seccionCensalService.remove(id);
  }
}