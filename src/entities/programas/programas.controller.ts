/*
Manejo de errores.
     La documentacion de Nest aconseja usar:
     https://docs.nestjs.com/exception-filters

     Ejemplos de uso:
     https://www.youtube.com/watch?v=XP_gONOksuM
     https://www.youtube.com/watch?v=PdYCxDl4j0c
     https://medium.com/swlh/filters-how-nest-js-handle-exceptions-c2e54cbc961a
     https://jenijoe.medium.com/angular-crud-service-create-it-extend-it-d972d61fc400

     Preferencia al declarar filter:
     https://stackoverflow.com/questions/54727103/nestjs-how-to-pass-the-error-from-one-error-filter-to-another?fbclid=IwAR0OC_4XqxpNncs9vSVpaGKqKFHTbyNIoLvXMQ6wJSQmt6F3OkpF_x50DxE
*/

import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Logger,
  UseInterceptors,
  UseFilters,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreateProgramaDto, UpdateProgramaDto } from './dto';
import { ProgramasService } from './programas.service';
import { Programa } from './entities/programa.entity';
import { LoggingInterceptor } from 'src/common/interceptors/logging.interceptor';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
import { NotFoundInterceptor } from 'src/common/interceptors/NotFound.Interceptor';
// import { GlobalExceptionFilter } from 'src/common/filters/global-exception.filter';

@ApiTags('programas')
@Controller('programas')
@UseInterceptors(LoggingInterceptor)
export class ProgramasController {
  logger = new Logger('ProgramasControler');
  constructor(private readonly programasService: ProgramasService) {}

  @Post()
  @UseInterceptors(new NotFoundInterceptor('El programa no se encuentra'))

  async create(@Body() createProgramaDto: CreateProgramaDto) {
    return await this.programasService.create(createProgramaDto);
  }

  @Get()
  async find(): Promise<void | Programa[]> {
    return await this.programasService.findAll();
  }

  @Get(':id')
  @UseInterceptors(new NotFoundInterceptor('El programa no se encuentra'))
  @UseFilters(new HttpExceptionFilter())
  async findOne(@Param('id') id: string) {
    return await this.programasService.findOne(id);
  }

  @Put(':id')
  @UseInterceptors(new NotFoundInterceptor('El programa no se encuentra'))
  @UseFilters(new HttpExceptionFilter())
  async update(
    @Param('id') id: string,
    @Body() updateProgramaDto: UpdateProgramaDto,
  ) {
    return await this.programasService.update(id, updateProgramaDto);
  }

  @Delete(':id')
  // @UseFilters(new GlobalExceptionFilter())
  @UseInterceptors(new NotFoundInterceptor('NO se ha borrado el registro'))
  @UseFilters(new HttpExceptionFilter())
  async delete(@Param('id') id: string) {
    return await this.programasService.delete(id);
  }
}
