import {
  IsNotEmpty,
  IsString,
  IsBoolean,
  IsEnum,
  IsArray,
  IsOptional,
} from 'class-validator';
import { EnumToString } from '../../../common/helper/enumToString';
import { enteTipo } from '../enum';
export class CreateEnteDto {
  @IsString()
  nombre: string;
  @IsString()
  codeHacienda: string;
  @IsEnum(enteTipo, {
    message: `Tipo no valido. Los tipos validos son: ${EnumToString(enteTipo)}`,
  })
  tipo: string;
}
