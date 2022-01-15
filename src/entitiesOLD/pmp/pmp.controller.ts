import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PmpService } from './pmp.service';
import { CreatePmpDto } from './dto/create-pmp.dto';
import { UpdatePmpDto } from './dto/update-pmp.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('pmp')
@Controller('pmp')
export class PmpController {
  constructor(private readonly pmpService: PmpService) { }

  @Post()
  create(@Body() createPmpDto: CreatePmpDto) {
    return this.pmpService.create(createPmpDto);
  }

  @Get()
  findAll() {
    return this.pmpService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pmpService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePmpDto: UpdatePmpDto) {
    return this.pmpService.update(+id, updatePmpDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pmpService.remove(+id);
  }
}
