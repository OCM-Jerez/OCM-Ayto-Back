import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DelegacionesService } from './delegaciones.service';
import { CreateDelegacioneDto } from './dto/create-delegacione.dto';
import { UpdateDelegacioneDto } from './dto/update-delegacione.dto';

@Controller('delegaciones')
export class DelegacionesController {
  constructor(private readonly delegacionesService: DelegacionesService) {}

  @Post()
  create(@Body() createDelegacioneDto: CreateDelegacioneDto) {
    return this.delegacionesService.create(createDelegacioneDto);
  }

  @Get()
  findAll() {
    return this.delegacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.delegacionesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDelegacioneDto: UpdateDelegacioneDto,
  ) {
    return this.delegacionesService.update(+id, updateDelegacioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.delegacionesService.remove(+id);
  }
}
