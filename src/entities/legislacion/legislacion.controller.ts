import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LegislacionService } from './legislacion.service';
import { CreateLegislacionDto } from './dto/create-legislacion.dto';
import { UpdateLegislacionDto } from './dto/update-legislacion.dto';

@Controller('legislacion')
export class LegislacionController {
  constructor(private readonly legislacionService: LegislacionService) {}

  @Post()
  create(@Body() createLegislacionDto: CreateLegislacionDto) {
    return this.legislacionService.create(createLegislacionDto);
  }

  @Get()
  findAll() {
    return this.legislacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.legislacionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLegislacionDto: UpdateLegislacionDto,
  ) {
    return this.legislacionService.update(+id, updateLegislacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.legislacionService.remove(+id);
  }
}
