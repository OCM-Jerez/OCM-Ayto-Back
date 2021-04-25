import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
// import { InjectRolesBuilder, RolesBuilder } from 'nest-access-control';
// import { AppResource } from 'src/app.roles';
import { EnteService } from './ente.service';
import { CreateEnteDto, EditEnteDto } from './dto';
// import { User, Auth } from 'src/common/decorators';
// import { User as Use } from 'src/user/entities';

@ApiTags('Entes')
@Controller('ente')
export class EnteController {
  constructor(
    private readonly enteService: EnteService,
    // @InjectRolesBuilder()
    // private readonly roleBuilder: RolesBuilder,
  ) { }

  @Get()
  async getMany() {
    const data = await this.enteService.getMany();
    return { data };
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    const data = await this.enteService.getById(id);
    return { data };
  }

  // @Auth({
  //   resource: AppResource.POST,
  //   action: 'create',
  //   possession: 'own',
  // })
  @Post()
  async createPost(@Body() dto: CreateEnteDto) {
    const data = await this.enteService.createOne(dto);
    return { message: 'Ente creado', data };
  }

  // @Auth({
  //   resource: AppResource.POST,
  //   action: 'update',
  //   possession: 'own',
  // })
  @Put(':id')
  async editOne(
    @Param('id') id: number,
    @Body() dto: EditEnteDto,
    // @User() author: UserEntity,
  ) {
    // let data;

    // if (
    // this.roleBuilder.can(author.roles).updateAny(AppResource.POST).granted
    // ) {
    // Puede editar cualquier POST...
    //   data = await this.enteService.editOne(id, dto);
    // } else {
    // Puede editar solo los propios...
    const data = await this.enteService.editOne(id, dto);
    // }

    return { message: 'Ente editado', data };
  }

  // @Auth({
  //   resource: AppResource.POST,
  //   action: 'delete',
  //   possession: 'own',
  // })
  @Delete(':id')
  async deleteOne(@Param('id') id: number) {
    // let data;

    // if (
    // this.roleBuilder.can(author.roles).deleteAny(AppResource.POST).granted
    // ) {
    // data = await this.enteService.deleteOne(id);
    // } else {
    const data = await this.enteService.deleteOne(id);
    // }
    return { message: 'Ente borrado', data };
  }
}


// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   Logger,
//   Param,
//   Put,
// } from '@nestjs/common';
// import { CreateEnteDto, EditEnteDto } from './dto';

// const logger = new Logger();
// @Controller('ente')
// export class EnteController {
//   @Get()
//   getMany() {
//     return 'localhost:3000/ente';
//   }
//   @Get('getOne')
//   getOne() {
//     return { message: 'localhost:3000/ente/getone' };
//   }
//   @Get(':id')
//   getOneId(@Param('id') id: string) {
//     console.log(id);
//     logger.log(id);
//     return { message: 'localhost:3000/ente/21' };
//   }
//   @Post()
//   createOne(@Body() dto: CreateEnteDto) {
//     logger.log('POST  localhost:3000/ente');
//     return dto;
//   }
//   @Put(':id')
//   editOne(@Param('id') id: string, @Body() dto: EditEnteDto) {
//     logger.log('PUT  localhost:3000/ente');
//     return dto;
//   }
// }
 //   @Delete(':id')
  //   editOne(@Param('id') id: string)  {}