import { IsOptional, IsString, IsEnum } from 'class-validator';
import { SortByConstructorEnum } from '../enums/sort-by-constructors.enum';
import { FindAllDto } from '../../database/dto/find-all.dto';

export class FindAllConstructorDto extends FindAllDto {
  @IsOptional()
  @IsEnum(SortByConstructorEnum)
  sortBy?: SortByConstructorEnum;

  @IsString()
  @IsOptional()
  constructorRef: string;

  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  nationality: string;
}
