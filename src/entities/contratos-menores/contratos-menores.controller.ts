import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ContratosMenoresService } from './contratos-menores.service';
import { CreateContratosMenoreDto } from './dto/create-contratos-menore.dto';
import { UpdateContratosMenoreDto } from './dto/update-contratos-menore.dto';

@Controller('contratos-menores')
export class ContratosMenoresController {
  constructor(
    private readonly contratosMenoresService: ContratosMenoresService,
  ) {}

  @Post()
  create(@Body() createContratosMenoreDto: CreateContratosMenoreDto) {
    return this.contratosMenoresService.create(createContratosMenoreDto);
  }

  @Get()
  findAll() {
    return this.contratosMenoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contratosMenoresService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateContratosMenoreDto: UpdateContratosMenoreDto,
  ) {
    return this.contratosMenoresService.update(+id, updateContratosMenoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contratosMenoresService.remove(+id);
  }
}
