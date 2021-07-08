import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { OrganicosService } from './organicos.service';
import { CreateOrganicoDto } from './dto/create-organico.dto';
import { UpdateOrganicoDto } from './dto/update-organico.dto';
import { Organico } from './entities/organico.entity';

@Controller('organicos')
export class OrganicosController {
  constructor(private readonly organicosService: OrganicosService) { }

  @ApiTags('organicos')
  @Post()
  async create(@Body() createOrganicoDto: CreateOrganicoDto) {
    return await this.organicosService.create(createOrganicoDto);
  }

  @Get()
  async find(): Promise<void | Organico[]> {
    return await this.organicosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.organicosService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateOrganicoDto: UpdateOrganicoDto,
  ) {
    return await this.organicosService.update(+id, updateOrganicoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.organicosService.remove(+id);
  }
}
