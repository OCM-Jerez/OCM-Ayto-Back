import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrganicosService } from './organicos.service';
import { CreateOrganicoDto } from './dto/create-organico.dto';
import { UpdateOrganicoDto } from './dto/update-organico.dto';

@Controller('organicos')
export class OrganicosController {
  constructor(private readonly organicosService: OrganicosService) {}

  @Post()
  create(@Body() createOrganicoDto: CreateOrganicoDto) {
    return this.organicosService.create(createOrganicoDto);
  }

  @Get()
  findAll() {
    return this.organicosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.organicosService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOrganicoDto: UpdateOrganicoDto,
  ) {
    return this.organicosService.update(+id, updateOrganicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.organicosService.remove(+id);
  }
}
