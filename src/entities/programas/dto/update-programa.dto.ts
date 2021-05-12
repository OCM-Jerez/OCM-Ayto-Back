/*
Mapped types
https://docs.nestjs.com/openapi/mapped-types?fbclid=IwAR2lfZslP5p624l5vOFn4JzHM3hNJFDoQkgimSWbhXNljM9HJQLHvaYIQzE
https://trilon.io/blog/introducing-mapped-types-for-nestjs
import { PartialType } from '@nestjs/mapped-types';
Si se importa de '@nestjs/mapped-types' no funciona.
Hay que instalarlo => npm i @nestjs/mapped-types
Se dijo de importarlo desde aqui en el video de Ruslan.
*/

// import { PartialType } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';

import { CreateProgramaDto } from './create-programa.dto';

export class UpdateProgramaDto extends PartialType(CreateProgramaDto) {}
