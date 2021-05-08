import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EconomicosService } from './economicos.service';
import { CreateEconomicoDto } from './dto/create-economico.dto';
import { UpdateEconomicoDto } from './dto/update-economico.dto';

@Controller('economicos')
export class EconomicosController {
  constructor(private readonly economicosService: EconomicosService) {}

  @Post()
  create(@Body() createEconomicoDto: CreateEconomicoDto) {
    return this.economicosService.create(createEconomicoDto);
  }

  @Get()
  findAll() {
    return this.economicosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.economicosService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEconomicoDto: UpdateEconomicoDto,
  ) {
    return this.economicosService.update(+id, updateEconomicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.economicosService.remove(+id);
  }
}
