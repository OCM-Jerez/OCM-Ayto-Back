import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoggingInterceptor } from 'src/common/interceptors/logging.interceptor';

import { DelegacionService } from './delegacion.service';
import { CreateDelegacionDto } from './dto/create-delegacion.dto';
import { UpdateDelegacionDto } from './dto/update-delegacion.dto';

@ApiTags('delegacion')
@Controller('delegacion')
@UseInterceptors(LoggingInterceptor)

export class DelegacionController {
  constructor(private readonly delegacionService: DelegacionService) { }

  @Post()
  create(@Body() createDelegacionDto: CreateDelegacionDto) {
    return this.delegacionService.create(createDelegacionDto);
  }

  @Get()
  findAll() {
    return this.delegacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.delegacionService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateDelegacionDto: UpdateDelegacionDto,
  ) {
    return this.delegacionService.update(id, updateDelegacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.delegacionService.remove(id);
  }
}


