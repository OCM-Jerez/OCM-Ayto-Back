import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseInterceptors,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoggingInterceptor } from 'src/common/interceptors/logging.interceptor';

import { OrganoContratacionService } from './organo-contratacion.service';
import { CreateOrganoContratacionDto } from './dto/create-organo-contratacion.dto';
import { UpdateOrganoContratacionDto } from './dto/update-organo-contratacion.dto';

@ApiTags('organoContratacion')
@Controller('organoContratacion')
@UseInterceptors(LoggingInterceptor)

export class OrganoContratacionController {
  constructor(private readonly organoContratacionService: OrganoContratacionService) { }
  @Post()
  create(@Body() createOrganoContratacionDto: CreateOrganoContratacionDto) {
    return this.organoContratacionService.create(createOrganoContratacionDto);
  }

  @Get()
  findAll() {
    return this.organoContratacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.organoContratacionService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateOrganoContratacionDto: UpdateOrganoContratacionDto,
  ) {
    return await this.organoContratacionService.update(id, updateOrganoContratacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.organoContratacionService.remove(id);
  }
}