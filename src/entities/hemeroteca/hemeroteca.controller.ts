import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HemerotecaService } from './hemeroteca.service';
import { CreateHemerotecaDto } from './dto/create-hemeroteca.dto';
import { UpdateHemerotecaDto } from './dto/update-hemeroteca.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('hemeroteca')
@Controller('hemeroteca')
export class HemerotecaController {
  constructor(private readonly hemerotecaService: HemerotecaService) { }

  @Post()
  create(@Body() createHemerotecaDto: CreateHemerotecaDto) {
    return this.hemerotecaService.create(createHemerotecaDto);
  }

  @Get()
  findAll() {
    return this.hemerotecaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hemerotecaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHemerotecaDto: UpdateHemerotecaDto,
  ) {
    return this.hemerotecaService.update(+id, updateHemerotecaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hemerotecaService.remove(+id);
  }
}
