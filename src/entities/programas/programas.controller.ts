import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Logger,
  UseInterceptors,
  Put,
  HttpException,
  HttpStatus,
  UseFilters,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreateProgramaDto, UpdateProgramaDto } from './dto';
import { ProgramasService } from './programas.service';
import { LoggingInterceptor } from '../../interceptors/logging.interceptor';
import { HttpExceptionFilter } from 'src/common/http-exception.filter';

@ApiTags('programas')
@Controller('programas')
@UseInterceptors(LoggingInterceptor)
export class ProgramasController {
  logger = new Logger('ProgramasControler');
  constructor(private readonly programasService: ProgramasService) {}

  @Post()
  async create(@Body() createProgramaDto: CreateProgramaDto) {
    return await this.programasService.create(createProgramaDto);
  }

  @Get()
  async find() {
    return await this.programasService.find();
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
  @UseFilters(new HttpExceptionFilter())
  async delete(@Param('id') id: string) {
    const rowDeleted = await this.programasService.delete(id);
    if (rowDeleted == 0) {
      throw new HttpException(
        {
          statusCode: HttpStatus.NOT_MODIFIED,
          message: 'NO se ha borrado el registro',
        },
        HttpStatus.NOT_MODIFIED,
      );
    } else {
      console.log('borrado');
    }
  }
}
