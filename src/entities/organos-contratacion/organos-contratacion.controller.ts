import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrganosContratacionService } from './organos-contratacion.service';
import { CreateOrganosContratacionDto } from './dto/create-organos-contratacion.dto';
import { UpdateOrganosContratacionDto } from './dto/update-organos-contratacion.dto';

@Controller('organos-contratacion')
export class OrganosContratacionController {
  constructor(
    private readonly organosContratacionService: OrganosContratacionService,
  ) {}

  @Post()
  create(@Body() createOrganosContratacionDto: CreateOrganosContratacionDto) {
    return this.organosContratacionService.create(createOrganosContratacionDto);
  }

  @Get()
  findAll() {
    return this.organosContratacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.organosContratacionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOrganosContratacionDto: UpdateOrganosContratacionDto,
  ) {
    return this.organosContratacionService.update(
      +id,
      updateOrganosContratacionDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.organosContratacionService.remove(+id);
  }
}
